import mongoose, { Schema } from 'mongoose';

const movieSchema = new Schema({
    // _id: Schema.Types.ObjectId, 

    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: String,
    rate: Number,
    url: String,
    image: String

});

// Create a model from the schema and export it 
const Movie = mongoose.model('Movie', movieSchema);

export default Movie;