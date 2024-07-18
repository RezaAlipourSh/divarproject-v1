const autoBind = require("auto-bind");
const OptionModel = require("./Option.model");
const createHTTPError = require("http-errors");
const { OptionMessage } = require("./Option.message");
const CategoryService = require("../category/category.service")
const { default: slugify } = require("slugify");
const { isTrue, isFalse } = require("../../common/utils/functions");

class OptionService {
    #model
    #categoryService
    constructor() {
        autoBind(this)
        this.#model = OptionModel
        this.#categoryService = CategoryService
    }
    async find() {
        const options = await this.#model.find({}, { __v: 0 }, { sort: { id: -1 } }).populate([{ path: "category", select: { name: 1, slug: 1 } }]);
        return options
    }
    async create(OptionDto) {
        const category = await this.#categoryService.chechExistByID(OptionDto.category);
        OptionDto.category = category._id;
        OptionDto.key = slugify(OptionDto.key, { trim: true, replacement: "_", lower: true });
        await this.alreadyExistbyCategoryAndKey(OptionDto.key, OptionDto._id)
        if (OptionDto?.enum && typeof OptionDto.enum === "string") {
            OptionDto.enum = OptionDto.enum.split(",")
        } else if (Array.isArray(OptionDto.enum)) OptionDto.enum = [];
        if (isTrue(OptionDto?.required)) OptionDto.required = true;
        if (isFalse(OptionDto?.required)) OptionDto.required = false;
        const option = await this.#model.create(OptionDto);
        return option;

    }
    async findByCategorySlug(slug) {
        const options = await this.#model.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                }
            },
            {
                $unwind: "$category"
            },
            {
                $addFields: {
                    categorySlug: "$category.slug",
                    categoryName: "$category.name",
                    categoryIcon: "$category.icon",
                }
            },
            {
                $project: {
                    category: 0,
                    __v: 0
                }
            }, {
                $match: {
                    categorySlug: slug
                }
            }
        ]);
        return options
    }
    async findById(id) {
        return await this.chechExistByID(id);
    }

    async removeById(id) {
        await this.chechExistByID(id);
        return await this.#model.deleteOne({ _id: id });
    }

    async findByCategotyId(category) {
        return await this.#model.find({ category }, { __v: 0 }).populate([{ path: "category", select: { name: 1, slug: 1 } }]);
    }

    async chechExistByID(id) {
        const option = await this.#model.findById(id);
        if (!option) throw new createHTTPError.NotFound(OptionMessage.notFound);
        return option;
    }

    async alreadyExistbyCategoryAndKey(key, category) {
        const isExist = await this.#model.findOne({ key, category });
        if (isExist) throw new createHTTPError.Conflict(OptionMessage.alreadyExist);
        return null;
    }

}

module.exports = new OptionService();

