const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

function swaggerConfig(app) {
    try {
        const swaggerDocument = swaggerJsDoc({
            swaggerDefinition: {
                openapi: "3.0.1",
                info: {
                    title: "divar Project Backend",
                    description: " divar Project with swagger",
                    version: "1.0.0"
                },
            },
            apis: [process.cwd() + "/src/modules/**/*.swagger.js"]
        });

        const swagger = swaggerUi.setup(swaggerDocument, {});
        app.use("/", swaggerUi.serve, swagger)
    } catch (error) {
        console.log(error)
    }

}

module.exports = swaggerConfig

