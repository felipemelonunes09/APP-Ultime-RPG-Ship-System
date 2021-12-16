const express = require('express');
const cannonRouter = require('./cannon/cannon.route');
const bodyParser = require('body-parser')
const app = express();

// Config 
    app.use( bodyParser.urlencoded({ extended: true }) )
    app.use( bodyParser.json() )


app.get('/', (req, res) => {
    res.status(200).send({
        title: 'URSS Api running!',
        status: true
    })
})


app.use('/cannon', cannonRouter)
module.exports = app;