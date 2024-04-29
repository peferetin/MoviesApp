import { Router } from 'express';
import Users from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import upload from '../middleware/uploadFile.js';


const authRouter = Router();

// Get all users  route 
authRouter.get('/users', async (req, res) => {
    const users = await Users.find();
    res.json(users);
});

// Register route 

authRouter.post('/register', upload.single('image'), async (req, res) => {

    // Check if the email already exists in the database

    const emailExists = await Users.findOne({ email: req.body.email, });
    if (emailExists) {
        return res.status(400).json({ message: 'Email already exists' });
    }
    const salt = await bcrypt.genSalt(10); // generate salt needed for hashing the password.
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        age: req.body.age,
        image: '/public/images/' + req.file.filename,
        gender: req.body.gender,
    });
    user.save()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
}
);
//  Login route 

authRouter.post('/login', async (req, res) => {

    // Check if the email exists in the database
    const validUser = await Users.findOne
        ({ email: req.body.email });
    if (!validUser) {
        return res.status(400).json({ message: 'Email is not found' });

    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(req.body.password, validUser.password);
    if (!validPassword) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    // Create and assign a token
    const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET);
    res.header('auth-token', token).json({ token });
});




export default authRouter;