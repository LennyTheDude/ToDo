const express = require('express')
const tasksRouter = express.Router()
const models = require('../../models')


tasksRouter.post('/tasks/', (req, res) => {
    const task = req.query;
    console.log(models.Task);
    models.Task.create({taskName: task.taskName, isDone: false})
    res.status(200).send();
})

module.exports = tasksRouter