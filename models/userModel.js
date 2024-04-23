import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({

    // name: {
    //     type: String,
    //     required: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
    // age: {
    //     type: Number,
    //     required: true,
    // },

    name: String,
    email: String,
    password: String,
    age: Number,

});
const User = mongoose.model('User', userSchema);

export default User;