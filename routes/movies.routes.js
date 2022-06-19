const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.model');
const Celebrity = require('../models/Celebrity.model');

app.get('/', (req,res,next) => {
    res.render('movies/movies')
})

app.get('/', async (req,res,next) => {
   try {
       const movies = await Movie.find()
       res.render('movies/movies', {movies})
   } catch (e) {
       console.log(e)
   }
})

//rutas para mostrar y crear
app.get('/create', (req,res,next) => {
    res.render('movies/new-movie');
})

app.get('/create',  async (req,res,next) =>{
     try{
         const celebrities = await Celebrity.find({celebrities})
         res.render('movies/new-movie', {celebrities})
     }
     catch(e){
         console.log(e)
     }
})

app.post('/create', async(req,res,next) => {
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

module.exports= router