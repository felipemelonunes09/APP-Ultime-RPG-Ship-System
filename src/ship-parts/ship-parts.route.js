const shipPartsController = require('./ship-parts.controller');
const express = require('express')
const shipPartsRouter = express.Router();

shipPartsRouter.get('/:id', shipPartsController.findById);

shipPartsRouter.post('/', shipPartsController.save);


module.exports = shipPartsRouter;
