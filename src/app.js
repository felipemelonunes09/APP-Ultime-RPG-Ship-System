const express = require('express');
const cannonRouter = require('./cannon/cannon.route');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        title: 'URSS Api running!',
        status: true
    })
})

app.use('/cannon', cannonRouter)
module.exports = app;