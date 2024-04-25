import express from 'express';
import User from '../models/userModel.js';




const userRouter = express.Router();

userRouter.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

userRouter.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const userByID = await User.findById(id);
        return res.json(userByID);
    } catch (err) {
        return res.status(404).json({ message: "User not found" });
    }
});


userRouter.post('/users', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
    });
    newUser.save();
    res.json(newUser);
});

userRouter.put('/users/:id', async (req, res) => {
    const userID = req.params.id;
    const user = users.find((user) => user.name === parseInt(userID));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    } return res.json(user);
});


export default userRouter;