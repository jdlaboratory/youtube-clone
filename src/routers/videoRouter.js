import express from "express"; // 필요한 모듈은 모든 js 마다 불러와줘야한다
import { 
    getUpload, 
    postUpload, 
    watch, 
    getEdit, 
    postEdit, 
    deleteVideo,
} from "../controllers/videoController.js";

const videoRouter = express.Router();


videoRouter.get("/:id([0-9a-f]{24})", watch); //숫자만 허용
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

//videoRouter.get("/:id(\\d+)/edit", getEdit); //숫자만 허용
//videoRouter.post("/:id(\\d+)/edit", postEdit);
//videoRouter.get("/upload", upload);
//videoRouter.get("/:id(\\d+)/delete", deleteVideo); //숫자만 허용

export default videoRouter;