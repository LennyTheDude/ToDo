const express = require('express')
const tasksRouter = express.Router()

tasksRouter.get('/tasks/:id', (req, res) => {
    const task = tasksList[req.params.id]
    if (task) {
        res.status(200).send(task)
    } else {
        res.status(404).send('No such task in the list')
    }
})

module.exports = tasksRouter