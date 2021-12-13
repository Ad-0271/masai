const express = require('express');

const Theatre = require('../models/theatre.model');
const crudController = require('./crud.controller');

const router = express.Router();

router.get('', crudController.getAll(Theatre));
router.get('/:id', crudController.getOne(Theatre));
router.post('', crudController.post(Theatre));
router.patch('/:id', crudController.updateOne(Theatre));
router.delete('/:id', crudController.deleteOne(Theatre));

module.exports = router;