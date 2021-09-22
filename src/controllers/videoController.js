let videos = [
    {
        title:"Hello",
        rating:5,
        comments:5,
        createdAt: "2 minutes age",
        views:59,
        id:1,
    },
    {
        title:"#2 Video",
        rating:4.5,
        comments:1,
        createdAt: "15 minutes age",
        views:32,
        id:2,
    },
    {
        title:"Third Video",
        rating:4,
        comments:3,
        createdAt: "60 minutes age",
        views:24,
        id:3,
    },
];

const fakeUser = {
    username:"Nicolas",
    loggedIn: true,
};

// global router
export const trending = (req, res) => {    
    return res.render("home", {pageTitle: "Home", variable:"Tomato", fakeUser, videos});
}

// video router
export const watch = (req, res) => {
    const {id}= req.params;
    //const id= req.params.id;
    const video = videos[id - 1];
    res.render("watch", {pageTitle: `Watching ${video.title}`, video });
}
export const getEdit = (req, res) =>  {
    const {id}= req.params;
    const video = videos[id - 1];
    res.render("edit", {pageTitle:`Editing: ${video.title}`, video});
}
export const postEdit = (req, res) =>  {
    const {id}= req.params;
    const {title} = req.body;
    videos[id - 1].title = title; // 가짜 db라 작동 안함.
    return res.redirect(`/videos/${id}`);
}

export const upload = (req, res) =>  {
    res.send("Upload a Video");
}

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle:"Upload Video"});
}

export const postUpload = (req, res) => {
    const {title} = req.body;
    const newVideo = {
        title,
        rating: 0,
        comments: 0,
        createdAt: "Just now",
        views: 0,
        id: videos.length + 1,

    };
    videos.push(newVideo);
    return res.redirect("/");
}

export const deleteVideo = (req, res) => res.send("Delete a Video");
export const search = (req, res) => res.send("Search");