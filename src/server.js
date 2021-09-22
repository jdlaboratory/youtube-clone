// Modules
import express from "express";
import morgan from "morgan";

// Routers (variable inside)
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";

// Default setting
const PORT = 4000;
const app = express(); // create express application 
const logger = morgan("dev");

console.log(process.cwd());

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger); // morgan
app.use(express.urlencoded({extended: true}));

// Use routers (variables from importing router.js)
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// Run a server
const handleListening = () => console.log(`MORGAN::Server listening on port http://localhost:${PORT}`);
app.listen(4000, handleListening); // request

