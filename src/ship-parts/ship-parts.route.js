const shipPartsController = require('./ship-parts.controller');
const express = require('express');
const shipPartsRouter = express.Router();

shipPartsRouter.get('/:id', shipPartsController.findById);
shipPartsRouter.get('/', shipPartsController.findAll)

shipPartsRouter.post('/', shipPartsController.save);

shipPartsRouter.delete('/:id', shipPartsController.delete)

shipPartsRouter.patch('/:id', shipPartsController.update)

module.exports = shipPartsRouter;
