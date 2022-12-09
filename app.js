import express from 'express';
import cookieparser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import userRoutes from './routes/userRoutes.js';

import connectDB from './utils/connectDB.js';

dotenv.config();

const port = 5000 || process.env.port;
const app = express();

connectDB();

app.use(cors());
app.use(cookieparser());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/user', userRoutes);



app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    return res.status(status).json({ sucess: false, message })
})

app.listen(port, () => {
    console.log("App is listening on port http://localhost:" + port);
});

export default app;