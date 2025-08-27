const {Router} = require("express");
const userController = require("../controllers/userController");
const userRouter = Router();

userRouter.get("/", userController.userGet);
userRouter.get("/new", userController.userFormGet);
userRouter.post("/new", userController.userFormPost);
module.exports = userRouter;