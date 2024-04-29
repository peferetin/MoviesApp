import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import moviesRouter from './routes/moviesRouter.js';
import authRouter from './routes/authRouter.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import upload from './middleware/uploadFile.js';
import userRouter from './routes/usersRouter.js';
import User from './models/userModel.js';





const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(moviesRouter);
app.use(authRouter);
app.use(userRouter)
app.use(express.static('public'));
app.use('images', express.static('public/images'));

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI)



app.get('/', (req, res) => {
    res.json('Welcome to Movie Application API!');
});


app.post('/users', upload.single('image'), (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        // password: req.body.password,
        age: req.body.age,
        gender: req.body.gender,
        image: './public/images/' + req.file.filename

    });
    user.save()
    return res.status(201).send('User created successfully')
})

app.get('/public/images/:filename', (req, res) => {
    const file = `public/images/${req.params.filename}`;
    res.sendFile(path.resolve(file));
})

app.get('images', (req, res) => {
    fs.readdir('public/images', (err, files) => {
        if (err) {
            return res.status(500).send('Server Error');
        }
        return res.status(200).send(files);
    });
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});