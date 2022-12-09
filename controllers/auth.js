import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createError } from '../utils/createError.js';
export const registerUser = async (req, res, next) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        let user = new User({ ...req.body, password: hash });
        await user.save();
        res.status(201).json({
            message: "User Created Successfully",
            user
        })
    } catch (err) {
        next(err)
    }
}

export async function loginUser(req, res, next) {
    try {
        let { username } = req.body;
        let user = await User.findOne({ username });
        !user && next(createError(404, "User not found!"));

        let isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        !isPasswordCorrect && next(createError(404, "User not found!"));

        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
            expiresIn: '7d'
        });
        let { password, ...others } = user._doc;
        res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).json({ message: "Logged In Successfully!", others, token })
    }
    catch (err) {
        next(err);
    }
}

export async function logoutUser(req, res, next) {
    try {
        res.clearCookie('access_token');
        res.status(200).json({ message: "Logout Successfully" });
    }
    catch (err) {
        next(err);
    }
}