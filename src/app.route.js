const router = require("express").Router()
const { AuthRouter } = require("./modules/auth/authRoutes");
const { CategoryRouter } = require("./modules/category/category.routes");
const { OptionRouter } = require("./modules/option/option.routes");
const postController = require("./modules/post/post.controller");
const { PostRouter } = require("./modules/post/post.routes");
const { UserRouter } = require("./modules/user/userRoutes");

router.use("/auth", AuthRouter);
router.use("/user", UserRouter);
router.use("/category", CategoryRouter);
router.use("/option", OptionRouter);
router.use("/post", PostRouter);
router.get("/", postController.postList)

module.exports = { mainRouter: router }