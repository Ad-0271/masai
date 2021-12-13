const express = require('express');

const Screen = require('../models/screen.model');
const crudController = require('./crud.controller');

const router = express.Router();

router.get('', crudController.getAll(Screen));
router.get('/:id', crudController.getOne(Screen));
router.post('', crudController.post(Screen));
router.patch('/:id', crudController.updateOne(Screen));
router.delete('/:id', crudController.deleteOne(Screen));

module.exports = router;