import mongoose from "mongoose"


// 데이터 형식 생성
const videoSchema = new mongoose.Schema({
    title: { type: String, required: true , trip: true, maxLength: 80},
    description: { type: String, required: true , trip: true, minLength: 5, maxLength: 140 }, // {type: String}과 같다.
    
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{type:String, trip: true}],
    meta: {
        views: {type: Number, default: 0, required: true },
        rating: {type: Number, default: 0, required: true },  
    },
});

videoSchema.static('formatHashtags', function(hashtags) {
    return hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
});

// videoSchema.pre('save', async function() {
//     this.hashtags = this.hashtags[0].split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
// });

// 모델 생성 Compile
const Video = mongoose.model("Video", videoSchema);
// 모델 보내기
export default Video;