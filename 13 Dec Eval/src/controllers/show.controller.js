const express = require('express');

const Show = require('../models/show.model');
const crudController = require('./crud.controller');

const router = express.Router();

router.get('', crudController.getAll(Show));
router.get('/:id', crudController.getOne(Show));
router.post('', crudController.post(Show));
router.patch('/:id', crudController.updateOne(Show));
router.delete('/:id', crudController.deleteOne(Show));

module.exports = router;