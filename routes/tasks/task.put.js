const express = require('express')
const tasksRouter = express.Router()
const models = require('../../models')

tasksRouter.put('/tasks/:id?:name?:isDone?', (req, res) => {
    const changedTask = req.query;
    console.log(changedTask);
    const task = models.Task.update({ taskName: changedTask.name, isDone: changedTask.isDone }, {
        where: {id: changedTask.taskId}
    })
    res.send('task updated!');
})

module.exports = tasksRouter