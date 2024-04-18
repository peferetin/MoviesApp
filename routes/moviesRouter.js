import { Router } from 'express';
import Movie from '../models/movieModel.js';


const moviesRouter = Router();

moviesRouter.get('/movies', async (req, res) => {

    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.json(error);
    }
});

moviesRouter.get('/movies/id/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const movie = await Movie.findById(id);
        res.json(movie);
    } catch (error) {
        res.json(error);
    }
});
moviesRouter.get('/movies/title/:title', async (req, res) => {
    const { title } = req.params;
    const searchByTitle = await Movie.findOne({ title: title })
    return res.json(searchByTitle)
})



moviesRouter.post('/movies', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.json(movie);
    } catch (error) {
        res.json(error);
    }
});

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

export default moviesRouter;
