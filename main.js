const express = require("express")
const dotenv = require("dotenv");
const swaggerConfig = require("./src/config/swagger.config");
const { mainRouter } = require("./src/app.route");
const NotFound = require("./src/common/exception/notfound.handler");
const AllExceptionHandler = require("./src/common/exception/all.exception.handler");
const cookieParser = require("cookie-parser");

dotenv.config()

async function main() {
    const app = express();

    const Port = process.env.PORT;
    require("./src/config/mongoose.config");

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

    app.use(mainRouter);
    swaggerConfig(app);


    NotFound(app);
    AllExceptionHandler(app);
    app.listen(Port, () => {
        console.log(`address is : http://localhost:${Port}`)
    })
}

main()