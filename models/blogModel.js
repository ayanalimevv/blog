import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title is required."]
    },
    desc: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    authorId:{
        type:String,
        required:[true,"authorId is missing!"]
    },
    likedBy: {
        type: [String],
    },
    views:{
        type:Number,
        default:0
    },
    tags:{
        type:[String],
        default:[]
    }
}, { timestamps: true });

export default mongoose.model('blog', blogSchema);