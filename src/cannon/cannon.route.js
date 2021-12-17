const cannonController = require('./cannon.controller');
const express = require('express')
const cannonRouter = express.Router();

cannonRouter.get('/:id', cannonController.findById);
cannonRouter.get('/', cannonController.findAll)

cannonRouter.post('/', cannonController.save);

cannonRouter.delete('/:id', cannonController.delete)

cannonRouter.patch('/:id', cannonController.update)

module.exports = cannonRouter;
