const express = require('express')
const tasksRouter = express.Router()

tasksRouter.get('/', (req, res) => {
    res.send(tasksList)
})

module.exports = tasksRouter