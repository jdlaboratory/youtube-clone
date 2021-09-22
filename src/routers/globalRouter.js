import express from "express"; // 필요한 모듈은 모든 js 마다 불러와줘야한다
import {join, login} from "../controllers/userController.js"
import {trending, search} from "../controllers/videoController.js";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;