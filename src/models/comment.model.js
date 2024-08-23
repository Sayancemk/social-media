import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({ 

    coomentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },

    comment: {
        type: String,
        required: true,
    },

},{ timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;