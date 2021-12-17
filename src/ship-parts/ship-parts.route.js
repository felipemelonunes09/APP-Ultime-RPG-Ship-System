const shipPartsController = require('./ship-parts.controller');
const express = require('express')
const shipPartsRouter = express.Router();

shipPartsRouter.get('/:id', shipPartsController.findById);

shipPartsRouter.get('/', cannonController.findAll)

shipPartsRouter.post('/', cannonController.save);

shipPartsRouter.delete('/:id', cannonController.delete)

module.exports = shipPartsRouter;
