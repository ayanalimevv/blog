import { registerUser, loginUser, logoutUser } from '../controllers/auth.js';
import express from 'express';
const router=express.Router();
// Register User
router.route('/register').post(registerUser);

// Login User
router.route('/login').post(loginUser);

// Logout User
router.route('/logout').delete(logoutUser);

export default router;