// import model
const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

// business logic
exports.createComment=async(req,res)=>{
    try{
        // fetch data from req body
        const {post,user,body}=req.body;
        // create a comment object
        const comment=new Comment({
            post,user,body
        });

        // save the new comment into the database
        const savedComment=await comment.save();

        // find the post by id and add the new comment to its comment array\
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("comments")//populate comments array with comments document
        .exec();
        res.json({
            post:updatedPost,
        })
    }
    catch(err){
        return res.status(500).json({
            err:"Error while creating comment",
        })
    }
}