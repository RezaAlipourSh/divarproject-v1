const autoBind = require("auto-bind");
const { randomInt } = require("crypto");
const createHttpErrors = require("http-errors");
const userModel = require("../user/userModel");
const jwt = require("jsonwebtoken");


class UserService {
    #model
    constructor() {
        autoBind(this);
        this.#model = userModel
    }

}

module.exports = new UserService()