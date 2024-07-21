const express = require("express")
const dotenv = require("dotenv");
const swaggerConfig = require("./src/config/swagger.config");
const { mainRouter } = require("./src/app.route");
const NotFound = require("./src/common/exception/notfound.handler");
const AllExceptionHandler = require("./src/common/exception/all.exception.handler");
const cookieParser = require("cookie-parser");
const expressEjsLayouts = require("express-ejs-layouts");
const moment = require("jalali-moment");
const methodOverride = require("method-override");


dotenv.config()

async function main() {
    const app = express();

    const Port = process.env.PORT;
    require("./src/config/mongoose.config");

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

    app.use(express.static("public"));
    app.use(expressEjsLayouts);
    app.use(methodOverride('_method'))
    app.set("view engine", "ejs");
    app.set("layout extractScripts", true);
    app.set("layout extractStyles", true);
    app.set("layout", "./layouts/panel/main.ejs");



    app.use(mainRouter);

    app.locals.moment = moment;

    swaggerConfig(app);

    NotFound(app);
    AllExceptionHandler(app);
    app.listen(Port, () => {
        console.log(`address is : http://localhost:${Port}`)
    })
}

main()