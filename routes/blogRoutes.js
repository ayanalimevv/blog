import express from 'express';
const router = express.Router();
import { deleteAllBlog, deleteBlog, getAllBlogs, getBlog, getBlogsbyAuthorId, getByAuthors, getByTags, getByTitle, likeBlog, postBlog, updateBlog } from '../controllers/blog.js';
import { verifyToken } from '../utils/verfiyToken.js';
// Get all blogs 
router.route('/find/all').get(getAllBlogs)
// Get a blog by id
router.route('/find/:id').get(getBlog)
// Post a blog
router.route('/post').post(verifyToken, postBlog);
// Delete a blog
router.route('/delete/:id').delete(verifyToken, deleteBlog);
// Delete all blogs
router.route('/all').delete(deleteAllBlog);
// Update a blog
router.route('/update/:id').put(verifyToken, updateBlog);
// Search blogs by tags
router.route('/tags').get(getByTags);
// Search blogs by title
router.route('/title').get(getByTitle);
// Search blogs by authors
router.route('/author').get(getByAuthors);
// Get blogs by author id
router.route('/author/:id').get(getBlogsbyAuthorId);
// Like a blog
router.route('/like/:id').put(verifyToken,likeBlog);

export default router;
