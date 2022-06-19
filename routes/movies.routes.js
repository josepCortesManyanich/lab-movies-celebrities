const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();

const Movie = require('../models/movie.model');
const Celebrity = require('../models/Celebrity.model');

router.get('/', (req,res,next) => {
    res.render('movies/movies')
})

router.get('/', async (req,res,next) => {
   try {
       const movies = await Movie.find()
       res.render('movies/movies', {movies})
   } catch (e) {
       console.log(e)
   }
})

//rutas para mostrar y crear
router.get('/', (req,res,next) => {
    res.render('movies/new-movie');
})
router.get('/create',  async (req,res,next) =>{
     try{
         const celebrities = await Celebrity.find()
         res.render('movies/new-movie', {celebrities})
     }
     catch(e){
         console.log(e)
     }
})

router.post('/create', async(req,res,next) => {
    const {title, genre, spot, cast} = req.body;
    try{
        const newMovie = {title, genre, spot, cast}
        await Movie.create(newMovie)
        res.redirect('movies/create')
    }
    catch(e){
        console.log(e)
        res.render('movies/new-movie')
    }
})

//iteration 7

router.get('/movieId', (req,res,next) => {
    res.render('/movies/movies-details')
})

router.get('/movieId', async(req,res,next) => {
    const {movieId} = req.params
    try {
        const movie = await Movie.findById(movieId)
        res.render('/movies/movies-details', movies)
    } catch (e) {
        console.log(e)
    }
})

//iteration 8 delete rute

router.post('/movieId/delete', async(req,res,next) => {
    const  {movieId} = req.params
    try {
        const movie = await Movie.findByIdAndDelete(movieId)
        res.render('movie/movie-details', movie)
    } catch (e) {
        console.log(e)
    }
})


module.exports= router