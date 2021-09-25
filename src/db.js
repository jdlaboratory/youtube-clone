import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError); 
// on은 여러번 발생하는 이벤트
db.once("open", handleOpen);
// once는 한번 발생하는 이벤트