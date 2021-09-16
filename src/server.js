import express from "express"; //import express
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";


const PORT = 4000;
const app = express(); // create express application 
const logger = morgan("dev");
app.use(logger); // morgan

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log(`MORGAN::Server listening on port https://localhost:${PORT}`);
app.listen(4000, handleListening); // request

