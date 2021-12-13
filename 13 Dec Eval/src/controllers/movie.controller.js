const express = require('express');

const Movie = require('../models/movie.model');
const crudController = require('./crud.controller');

const router = express.Router();

router.get('', crudController.getAll(Movie));
router.get('/:id', crudController.getOne(Movie));
router.post('', crudController.post(Movie));
router.patch('/:id', crudController.updateOne(Movie));
router.delete('/:id', crudController.deleteOne(Movie));

module.exports = router;