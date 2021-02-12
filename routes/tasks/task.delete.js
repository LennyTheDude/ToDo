const express = require('express')
const tasksRouter = express.Router()

tasksRouter.delete('/', (req, res) => {
    const taskId = req.query.id;
    const task = tasksList[taskId];
    if (task) {
        tasksList.splice(taskId, 1)
        res.status(205).send(tasksList)
    } else {
        res.status(404).send('No task with such ID found in the list')
    }
})

module.exports = tasksRouter