import mongoose from "mongoose"

// 데이터 형식 생성
const videoSchema = new mongoose.Schema({
    title: { type: String },
    description: String, // {type: String}과 같다.
    createAt: Date,
    hashtags: [{type:String}],
    meta: {
        views: Number,
        rating:Number,  
    },
});

// 모델 생성
const Video = mongoose.model("Video", videoSchema);
// 모델 보내기
export default Video;