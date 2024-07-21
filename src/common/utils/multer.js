const multer = require("multer");
const fs = require("fs");
const path = require("path");
const createHttpError = require("http-errors");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        fs.mkdirSync(path.join(process.cwd(), "public", "upload"), { recursive: true });
        cb(null, "public/upload")
    },
    filename: function (req, file, cb) {
        const whiteList = ["image/png", "image/jpg", "image/webp", "image/jpeg"];
        if (whiteList.includes(file.mimetype)) {
            const format = path.extname(file.originalname);
            const fileName = new Date().getTime().toString() + format;
            cb(null, fileName)
        } else {
            cb(new createHttpError.BadRequest("invalid format for picture. select valid format picture"))
        }

    }

})
const upload = multer({
    storage,
    limits: {
        fileSize: 3 * 1000 * 1000,
    }
});


module.exports = {
    upload
}