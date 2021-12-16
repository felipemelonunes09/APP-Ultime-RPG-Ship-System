const cannonController = require('./cannon.controller');
const express = require('express')
const cannonRouter = express.Router();

router.cannonRouter('/:id', cannonController.findById);

router.post('/', cannonController.save);


module.exports = cannonRouter;
