import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import moviesRouter from './routes/moviesRouter.js';




const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(moviesRouter);
app.use(express.static('public'));

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI)


app.get('/', (req, res) => {
    res.json('Welcome to Movie Application API!');
});







app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});