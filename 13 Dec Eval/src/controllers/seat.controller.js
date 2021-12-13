const express = require('express');

const Seat = require('../models/seat.model');
const crudController = require('./crud.controller');

const router = express.Router();

router.get('', crudController.getAll(Seat));
router.get('/:id', crudController.getOne(Seat));
router.post('', crudController.post(Seat));
router.patch('/:id', crudController.updateOne(Seat));
router.delete('/:id', crudController.deleteOne(Seat));

module.exports = router;