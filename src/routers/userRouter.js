import express from "express"; // 필요한 모듈은 모든 js 마다 불러와줘야한다
import {edit, remove, logout, see} from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);


export default userRouter;