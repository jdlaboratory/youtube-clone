import Video from "../models/Video.js";


// global router
export const home = async(req, res) => {    
    const videos = await Video.find({}).sort({createdAt:"desc"});
    return res.render("home", {pageTitle: "Home", videos});
}

// video router
export const watch = async (req, res) => {
    const {id}= req.params;
    const video = await Video.findById(id);
    if (!video) {
        return res.render("404", {pageTitle: "Video not found."}); 
    }
    return res.render("watch", {pageTitle: video.title, video});
}
export const getEdit = async (req, res) =>  {
    const {id}= req.params;
    const video = await Video.findById(id);
    if (!video){
        return res.render("404", {pageTitle: "Video not found."}); 
    }
    return res.render("edit", {pageTitle:`Editing: ${video.title}`, video});
}
export const postEdit = async (req, res) =>  {
    const {id}= req.params;
    const {title, description, hashtags} = req.body;
    const video = await Video.exists({_id:id});
    //console.log(req.body);
    if(!video){
        return res.render("404", {pageTitle: "Video not found."}); 
    }
    await Video.findByIdAndUpdate(id, {
        title,
        description,
        hashtags: Video.formatHashtags(hashtags),
    })
    return res.redirect(`/videos/${id}`);
}

export const upload = (req, res) =>  {
    res.send("Upload a Video");
}

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle:"Upload Video"});
}

export const postUpload = async(req, res) => {
    const {title, description, hashtags} = req.body;
    try {
        await Video.create({
            title,
            description,
            hashtags: Video.formatHashtags(hashtags),
        });
        return res.redirect("/");
    } catch (error) {
        console.log(error);
        return res.render("upload", 
            {pageTitle:"Upload Video", errorMessage: error._message,});
    }
}

export const deleteVideo = async (req, res) => {
    const {id} = req.params;
    await Video.findByIdAndDelete(id);
    return res.redirect("/");
}
export const search = async (req, res) => {
    const {keyword} = req.query;
    let videos = []; // if안에 넣으면 임시 변수이므로...
    if (keyword) { 
        videos = await Video.find({
            title: {
                $regex: new RegExp(keyword, "i"),
            },
        })
    }
    return res.render("Search", {pageTitle:"Search", videos});
};