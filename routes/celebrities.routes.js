const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();

const Celebrity = require ("../models/Celebrity.model");

// rutas get y post de create

router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrity');
})

router.post('/create', async (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body
    try{
        const newcelebrity = { name, occupation, catchPhrase } 
        await Celebrity.create(newcelebrity)
        res.redirect('/celebrities/create') 
    } catch(e){
        console.log(e)
        res.render('celebrities/new-celebrity')
    }
})

// ruta para /celebrities 

router.get('/', (req,res,next) => {
    res.render('celebrities/celebrities');
})

// ruta para mostrar las celebrities
router.get('/', async(req,res,next) => {
    try{
       const celebrities = await Celebrity.find({celebrities})
        res.render('celebrities/celebrities',{celebrities})
    }
    catch(e){
        console.log(e)
    }
})

module.exports = router