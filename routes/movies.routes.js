const express = require('express');
const { redirect } = require('express/lib/response');
const async = require('hbs/lib/async');
const app = require('../app');
const router = express.Router();

const Movie = require('../models/movie.model');
const Celebrity = require('../models/Celebrity.model');

//ruta para mostrar
app.get('/create',  async (req,res,next) =>{
     try{
         const celebrities = await Celebrity.find({celebrities})
         res.render('movies/new-movie', {celebrities})
     }
     catch(e){
         console.log(e)
     }
})
// ruta para crear
app.post('/create', async(req,res,next) => {
    const {title, genre, spot, cast} = req.body;
    try{
        const newMovie = {title, genre, spot, cast}
        await Movies.create(newMovie)
        res.redirect('movies/new-movies')
    }
    catch(e){
        console.log(e)
    }
})