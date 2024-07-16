const { Schema, model } = require("mongoose");

const otpSchema = new Schema({
    code: { type: String, required: false, default: undefined },
    expiresIn: { type: Number, default: 0, required: false }
});

const UserSchema = new Schema({
    fullName: { type: String, required: false },
    mobile: { type: String, unique: true, required: true },
    otp: { type: otpSchema },
    verifyMobile: { type: Boolean, required: true, default: false },
    accessToken: { type: String }
}, {
    timestamps: true
})

const userModel = model("user", UserSchema);

module.exports = userModel