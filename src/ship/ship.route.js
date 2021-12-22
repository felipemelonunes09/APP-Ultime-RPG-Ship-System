const shipController = require('./ship.controller');
const express = require('express');
const shipRouter = express.Router();

shipRouter.get('/:id', shipController.findById);
shipRouter.get('/', shipController.findAll);

shipRouter.post('/', shipController.save);

shipRouter.delete('/:id', shipController.delete);

shipRouter.patch('/:id', shipController.update);

module.exports = shipRouter;
