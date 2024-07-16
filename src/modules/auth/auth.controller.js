const cookieNames = require("../../common/constant/cookie.enum");
const NodeEnv = require("../../common/constant/env.enum");
const { AuthMessages } = require("./auth.messages");
const AuthService = require("./authService");
const autoBind = require("auto-bind")


class AuthController {
    #service
    constructor() {
        autoBind(this)
        this.#service = AuthService
    }

    async sendOTP(req, res, next) {
        try {
            const { mobile } = req.body;
            await this.#service.sendOTP(mobile)
            return res.json({
                message: AuthMessages.sendOTPSuccessfully
            })

        } catch (error) {
            next(error)
        }
    }
    async checkOTP(req, res, next) {
        try {
            const { mobile, code } = req.body;

            const token = await this.#service.checkOTP(mobile, code);
            return res.cookie(cookieNames.AccessToken, token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === NodeEnv.Production
            }).status(200).json({
                message: AuthMessages.Loginsuccessfully,
            })

        } catch (error) {
            next(error)
        }
    }
    async Logout(req, res, next) {
        return res.clearCookie(cookieNames.AccessToken).status(200).json({
            message: "Successfully Log Out"
        })
    }


}

module.exports = new AuthController()