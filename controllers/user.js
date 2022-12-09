import User from '../models/userModel.js';
import { createError } from '../utils/createError.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).limit(25);
        !users && next(createError(404, "Users not found!"));
        res.status(201).json({
            message: "Users Founded Successfully",
            users
        })
    } catch (err) {
        next(err)
    }
}

export async function getUser(req, res, next) {
    try {
        const user = await User.findById(req.params.id);
        !user && next(createError(404, "User not found!"));
        res.status(201).json({
            message: "User Founded Successfully",
            user
        })
    }
    catch (err) {
        next(err);
    }
}

export async function deleteUser(req, res, next) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        !user && next(createError(404, "User not found!"));
        res.status(201).json({
            message: "User Deleted Successfully",
            user
        })
    }
    catch (err) {
        next(err);
    }
}

export async function updateUser(req, res, next) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true });
        !user && next(createError(404, "User not found!"));
        res.status(201).json({
            message: "User Updated Successfully",
            user
        })
    }
    catch (err) {
        next(err);
    }
}

export async function subscribe(req, res, next) {
    try {
        const user = await User.findById(req.params.id);
        const currentUser=await User.findById(req.user.id);

        (!user || !currentUser) && next(createError(404, "User not found!"));

        const subscribedUser = await User.findByIdAndUpdate(req.params.id, {
            $addToSet: { followers: req.user.id }
        },
            { new: true }
        );

        const loggedInUser=await User.findByIdAndUpdate(req.user.id,{
            $addToSet:{followedUsers:req.params.id}
        },{new:true});

        (!subscribedUser || !loggedInUser) && next(createError(500,"Something Went Wrong!"));

        res.status(201).json({
            message: `${subscribedUser.username} is successfully subscribed.`,
            subscribedUser:subscribedUser.username,loggedInUser:loggedInUser.username
        })
    }
    catch (err) {
        next(err);
    }
}

export async function unsubscribe(req, res, next) {
    try {
        const user = await User.findById(req.params.id);
        const currentUser=await User.findById(req.user.id);

        (!user || !currentUser) && next(createError(404, "User not found!"));

        const subscribedUser = await User.findByIdAndUpdate(req.params.id, {
            $pull: { followers: req.user.id }
        },
            { new: true }
        );

        const loggedInUser=await User.findByIdAndUpdate(req.user.id,{
            $pull:{followedUsers:req.params.id}
        },{new:true});

        (!subscribedUser || !loggedInUser) && next(createError(500,"Something Went Wrong!"));

        res.status(201).json({
            message: `${subscribedUser.username} is successfully unsubscribed.`,
            user:subscribedUser
        })
    }
    catch (err) {
        next(err);
    }
}