const autoBind = require("auto-bind");
const CategoryModel = require("./category.model");
const createHTTPError = require("http-errors");
const { CategoryMessage } = require("./category.message");
const { isValidObjectId, Types } = require("mongoose");
const { default: slugify } = require("slugify");
const OptionModel = require("../option/Option.model");

class CategoryService {
    #model
    #optionModel
    constructor() {
        autoBind(this)
        this.#model = CategoryModel
        this.#optionModel = OptionModel
    }
    async find() {
        return await this.#model.find({ parent: { $exists: false } });
    }
    async create(categoryDto) {
        if (categoryDto?.parent && isValidObjectId(categoryDto.parent)) {
            const existCategory = await this.checkExistByID(categoryDto.parent);
            categoryDto.parent = existCategory._id;
            categoryDto.parents = [
                ...new Set(
                    ([existCategory._id.toString()].concat(
                        existCategory.parents.map(id => id.toString())
                    )).map(id => new Types.ObjectId(id))
                )
            ]
        }
        if (categoryDto?.slug) {
            categoryDto.slug = slugify(categoryDto.slug)
            await this.alreadyExistBySlug(categoryDto.slug)
        } else {
            categoryDto.slug = slugify(categoryDto.name)
        }
        const category = await this.#model.create(categoryDto);
        return category;
    }

    async remove(id) {
        await this.checkExistByID(id);
        await this.#optionModel.deleteMany({ category: id }).then(async () => {
            await this.#model.deleteMany({ _id: id })
        });
        return true;
    }

    async checkExistByID(id) {
        const category = await this.#model.findById(id);
        if (!category) throw new createHTTPError.NotFound(CategoryMessage.notFound);
        return category;
    }

    async checkExistBySlug(slug) {
        const category = await this.#model.findOne({ slug });
        if (!category) throw new createHTTPError.NotFound(CategoryMessage.notFound);
        return category;
    }
    async alreadyExistBySlug(slug) {
        const category = await this.#model.findOne({ slug });
        if (category) throw new createHTTPError.Conflict(CategoryMessage.alreadyExist);
        return null
    }
}

module.exports = new CategoryService();