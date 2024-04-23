// import { Router } from 'express';
// import User from '../models/userModel.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const authRouter = Router();


// authRouter.post('/register', async (req, res) => {


//     const emailExists = await User.findOne({ email: req.body.email, });
//     if (emailExists) {
//         return res.status(400).json({ message: 'Email already exists' });
//     }
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: hashedPassword,
//     });
//     new User.save()
//         .then((data) => {
//             res.json(data);
//         })
//         .catch((error) => {
//             res.json({ message: error });
//         });
// }
// );

// authRouter.post('/login', async (req, res) => {
//     const validUser = await User.findOne
//         ({ email: req.body.email });
//     if (!validUser) {
//         return res.status(400).json({ message: 'Email is not found' });
//     }
//     const validPassword = await bcrypt.compare(req.body.password, validUser.password);
//     if (!validPassword) {
//         return res.status(400).json({ message: 'Invalid password' });
//     }
//     res.json({ message: 'Login successful' });

// });

// const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET);
// res.header('auth-token', token).json({ token });


// export default authRouter;