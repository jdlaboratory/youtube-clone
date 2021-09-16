import express from "express"; // 필요한 모듈은 모든 js 마다 불러와줘야한다

const globalRouter = express.Router();
const handleHome = (req, res) => res.send(`Home`);
globalRouter.get("/", handleHome);

export default globalRouter;