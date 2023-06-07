const express=require('express');
const router=express.Router();

// import controllers
const {createComment}=require("../controllers/commentController");
const {createPost,getAllPosts}=require("../controllers/postController");
const {likePost,unlikePost}=require("../controllers/likeController");


// mapping create
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);


// export
module.exports=router;