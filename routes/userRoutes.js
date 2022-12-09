import express from 'express';
import { deleteUser, getAllUsers, getUser, subscribe, unsubscribe, updateUser } from '../controllers/user.js';
import { verifyToken } from '../utils/verfiyToken.js';
const router = express.Router();
// Get all user
router.route('/find/all').get(getAllUsers)
// Get a user by id
router.route('/find/:id').get(getUser)
// Delete a user
router.route('/delete/:id').delete(verifyToken,deleteUser);
// Update a user
router.route('/update/:id').put(verifyToken,updateUser);
// Subscribe a user
router.route('/subscribe/:id').put(verifyToken, subscribe);
// Unsubscribe a user
router.route('/unsubscribe/:id').put(verifyToken, unsubscribe);

export default router;
