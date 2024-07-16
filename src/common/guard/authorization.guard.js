const createhttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const AuthorizationMessage = require("../messages/auth.message");
const userModel = require("../../modules/user/userModel");


require("dotenv").config();
const Authorization = async (req, res, next) => {
    try {
        const token = req?.cookies?.access_token;
        if (!token) throw new createhttpError.Unauthorized(AuthorizationMessage.Login);
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (typeof data == "object" && "id" in data) {
            // data?.id
            const user = await userModel.findById(data.id, { accessToken: 0, otp: 0, __v: 0, updatedAt: 0, verifyMobile: 0 });
            if (!user) throw new createhttpError.Unauthorized(AuthorizationMessage.NotFoundAccount);
            req.user = user;
            return next()
        }
        throw new createhttpError.Unauthorized(AuthorizationMessage.tokenIsInvalid)
    } catch (error) {
        next(error)
    }
}

module.exports = Authorization