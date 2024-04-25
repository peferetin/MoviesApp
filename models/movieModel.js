import mongoose, { Schema } from 'mongoose';

const movieSchema = new Schema({

    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: String,
    rate: Number,
    url: String,
    image: String

});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;