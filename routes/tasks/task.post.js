const express = require('express')
const tasksRouter = express.Router()

tasksRouter.post('/', (req, res) => {
    const task = req.query;
    console.log(task);
    if (task.id && task.name) {
        task.isDone = false
        tasksList.push(task)
        res.status(201).send(tasksList)
    } else {
        res.status(404).send('Unable to add task to the list')
    }
})

module.exports = tasksRouter