// verify user and admin using jwt
import jwt from 'jsonwebtoken';
import { createError } from './createError.js';

export const verifyToken = (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        !token && next(createError(401, "You are not authenticated!"));
        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            err && next(createError(403, "Token is not valid!"));
            req.user = user;
            next();
        })
    }
    catch (err) {
        next(err);
    }
}