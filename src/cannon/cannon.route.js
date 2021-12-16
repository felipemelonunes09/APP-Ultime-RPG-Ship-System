const cannonController = require('./cannon.controller');
const express = require('express')
const cannonRouter = express.Router();

cannonRouter.get('/:id', cannonController.findById);

cannonRouter.post('/', cannonController.save);


module.exports = cannonRouter;
