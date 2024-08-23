import mongoose from "mongoose";


const conversationSchema = new mongoose.Schema({

    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],

    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
    ],
}, { timestamps: true });
