const express = require('express')
const tasksRouter = express.Router()

tasksRouter.get('/', (req, res) => {
    res.send('Wanted tasks? Here you go then.')
});

module.exports = tasksRouter