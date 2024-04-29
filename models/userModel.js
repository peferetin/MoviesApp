import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({

    // _id: Schema.Types.ObjectId,  // This is automatically created by MongoDB

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,

    },

    // name: String,
    // email: String,
    // password: String,
    // age: Number,
    // image: String,
    // createdAt: {
    //     type: Date,
    //     default: new Date(),
    // },
    // gender: String,




});

// Create a model from the schema and export it
const User = mongoose.model('User', userSchema);

export default User;