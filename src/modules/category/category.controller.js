const autoBind = require("auto-bind");
const httpcodes = require("http-codes");
const { CategoryMessage } = require("./category.message");
const categoryService = require("./category.service");

class CategoryController {
    #service
    constructor() {
        autoBind(this);
        this.#service = categoryService
    }
    async create(req, res, next) {
        try {
            const { name, icon, slug, parent } = req.body;
            // برای نگرفتن دیتای اضافی در body مقدیر بالا را destructure میکنیم
            await this.#service.create({ name, icon, slug, parent });
            return res.status(httpcodes.CREATED).json({
                message: CategoryMessage.Created
            })
        } catch (error) {
            next(error)
        }
    }

    async find(req, res, next) {
        try {
            const categories = await this.#service.find();
            return res.json(categories)
        } catch (error) {
            next(error)
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.params;
            await this.#service.remove(id);
            return res.json({
                message: CategoryMessage.deleted
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new CategoryController()