import Blog from '../models/blogModel.js';
import User from '../models/userModel.js';

import { createError } from '../utils/createError.js';

export const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find({}).limit(25).sort({ views: -1 });
        !blogs && next(createError(404, "Blogs not found!"));
        res.status(201).json({
            message: "Blogs Founded Successfully",
            blogs
        })
    } catch (err) {
        next(err)
    }
}

export async function getBlog(req, res, next) {
    try {
        const blog = await Blog.findById(req.params.id);
        !blog && next(createError(404, "Blog not found!"));
        const newblog = await Blog.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1 }
        },
            { new: true })
        res.status(201).json({
            message: "Blog Founded Successfully",
            blog: newblog
        })
    }
    catch (err) {
        next(err);
    }
}

export async function postBlog(req, res, next) {
    try {
        let { username } = await User.findById(req?.user.id);
        let blog = new Blog({ ...req.body, authorId: req?.user.id, author: username });
        await blog.save();
        !blog && next(createError(404, "Error while creating blog!"));
        res.status(201).json({
            message: "Blog Created Successfully",
            blog
        })
    }
    catch (err) {
        next(err);
    }
}

export async function deleteBlog(req, res, next) {
    try {
        const blog = await Blog.findById(req.params.id);
        blog.authorId != req.user.id && next(createError(401, "You're not allowed to do this action!"))
        !blog && next(createError(404, "Blog not found!"));
        await Blog.findByIdAndDelete(req.params.id);
        res.status(201).json({
            message: "Blog Deleted Successfully"
        })
    }
    catch (err) {
        next(err);
    }
}

export async function updateBlog(req, res, next) {
    try {
        const blog = await Blog.findById(req.params.id);
        !blog && next(createError(404, "Blog not found!"));
        console.log(blog, req.user.id);

        blog.authorId != req.user.id && next(createError(401, "You are not allowed to do that"));

        const updatedblog = await Blog.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true });
        res.status(201).json({
            message: "Blog Updated Successfully",
            updatedblog
        })
    }
    catch (err) {
        next(err);
    }
}

export async function deleteAllBlog(req, res, next) {
    try {
        const blog = await Blog.deleteMany({});
        !blog && next(createError(404, "Blogs not found!"));

        res.status(201).json({
            message: "Blogs Deleted Successfully"
        })
    }
    catch (err) {
        next(err);
    }
}

export async function getByTags(req, res, next) {
    try {
        const terms = req.query.tags.split(',');
        const blog = await Blog.find({
            tags: { $in: terms }
        });
        !blog && next(createError(404, "Blog not found!"));
        res.status(201).json({
            message: "Blog Fetched Successfully",
            blog
        })
    }
    catch (err) {
        next(err);
    }
}

export async function getByTitle(req, res, next) {
    try {
        const term = req.query.q;
        const blog = await Blog.find({
            $or: [{ title: { $regex: term, $options: 'i' } }, { desc: { $regex: term, $options: 'i' } }, { author: { $regex: term, $options: 'i' } }, { tags: { $regex: term, $options: 'i' } }]
        }).sort({ views: -1 });
        !blog && next(createError(404, "Blog not found!"));

        res.status(201).json({
            message: "Blog Fetched Successfully",
            blog
        })
    }
    catch (err) {
        next(err);
    }
}

export async function getByAuthors(req, res, next) {
    try {
        const authors = req.query.a.split(',');
        console.log(authors);
        const blog = await Promise.all(authors.map(author => {
            return Blog.find({ author });
        }))
        !blog && next(createError(404, "Blog not found!"));


        res.status(201).json({
            message: "Blog Fetched Successfully",
            blog: blog.flat()
        })
    }
    catch (err) {
        next(err);
    }
}
export async function likeBlog(req, res, next) {
    try {
        const blog = await Blog.findById(req.params.id);
        !blog && next(createError(404, "Blog not found!"));

        const updatedblog = await Blog.findByIdAndUpdate(req.params.id, {
            $push: { likedBy: req.user.id }
        },
            { new: true });
        res.status(201).json({
            message: "Blog Liked Successfully",
            updatedblog
        })
    }
    catch (err) {
        next(err);
    }
}

export async function unlikeBlog(req, res, next) {
    try {
        const blog = await Blog.findById(req.params.id);
        !blog && next(createError(404, "Blog not found!"));

        const updatedblog = await Blog.findByIdAndUpdate(req.params.id, {
            $pull: { likedBy: req.user.id }
        },
            { new: true });
        res.status(201).json({
            message: "Blog Liked Successfully",
            updatedblog
        })
    }
    catch (err) {
        next(err);
    }
}