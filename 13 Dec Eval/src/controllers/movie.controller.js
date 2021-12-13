const express = require('express');

const Movie = require('../models/movie.model');
const crudController = require('./crud.controller');

const router = express.Router();

router.get('', crudController.getAll(Movie));
router.get('/:id', crudController.getOne(Movie));
router.post('', crudController.post(Movie));
router.patch('/:id', crudController.updateOne(Movie));
router.delete('/:id', crudController.deleteOne(Movie));
//get movie of a actor
router.get('/actor/:id', async (req, res) => {
    try{
        console.log(req.params.id)
        const items = await Movie.find({actors: {$eq: req.params.id}}).lean().exec();
        
        res.status(200).send(items);
    } catch(e) {
        res.status(500).send({status: 'fail', message: e.message});
    }
})

module.exports = router;