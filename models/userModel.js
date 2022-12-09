import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    followedUsers:{
        type:[String]
    },
    followers:{
        type:[String]
    }
})

export default model('user',userSchema);