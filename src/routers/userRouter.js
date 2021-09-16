import express from "express"; // 필요한 모듈은 모든 js 마다 불러와줘야한다

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send(`Edit User`);
userRouter.get("/edit", handleEditUser);

export default userRouter;