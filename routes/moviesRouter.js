import { Router } from 'express';
import Movie from '../models/movieModel.js';

// Create a new router object   

const moviesRouter = Router();

moviesRouter.get('/movies', async (req, res) => {
    // res.json(movies) // This is the old way of sending a response to the client 

    try {

        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.json(error);
    }
});

// Get a single movie by id 
moviesRouter.get('/movies/id/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const movie = await Movie.findById(id);
        res.json(movie);
    } catch (error) {
        res.json(error);
    }
});
// Get a single movie by title 
moviesRouter.get('/movies/title/:title', async (req, res) => {
    const { title } = req.params;
    // const searchByTitle = await Movie.findOne({ title: title })
    const searchByTitle = await Movie.findOne({ title: { $regex: new RegExp(title, 'i') } })
    return res.json(searchByTitle)
})


// Create a new movie 
moviesRouter.post('/movies', async (req, res) => {

    try {
        const movie = await Movie.create(req.body);
        res.json(movie);
    } catch (error) {
        res.json(error);
    }
});


// Update a movie by id 
moviesRouter.put("/movies/:id", async (req, res) => {
    const movieID = req.params.id;
    const movie = movies.find((movie) => movie.name === parseInt(movieID));
});

moviesRouter.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const movie = await Movie.findByIdAndDelete(id);

        res.json(movie);
    } catch (error) {
        res.json(error);
    }

});

// Delete movie by its id 
moviesRouter.delete('/deletedMovie/:_id', async (req, res) => {
    try {
        const movies = await Movie.deleteMany();
        res.json(movies);
    } catch (error) {
        res.json(error);
    }
});

export default moviesRouter;
