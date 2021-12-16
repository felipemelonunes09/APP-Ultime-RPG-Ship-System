const cannonController = require('./cannon.controller');
const express = require('express')
const router = express.Router();

router.get('/:id', cannonController.findById);

module.exports = router;
