import express from "express"; // 필요한 모듈은 모든 js 마다 불러와줘야한다

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send(`Watch Video`);
videoRouter.get("/watch", handleWatchVideo);

export default videoRouter;