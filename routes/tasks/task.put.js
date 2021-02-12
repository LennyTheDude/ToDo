const express = require('express')
const tasksRouter = express.Router()

tasksRouter.put('/', (req, res, next) => {
    const taskId = req.query.taskId;
    const editedTask = req.query;
    const taskToEdit = tasksList[taskId];

    if (taskToEdit) {
        if (taskToEdit.name != editedTask.name) {
            taskToEdit.name = editedTask.name
        }
        if (taskToEdit.isDone != editedTask.isDone) {
            taskToEdit.isDone = editedTask.isDone
        }
        res.status(205).send(editedTask)
    } else {
        res.status(404).send('No task with such ID found in the list')
    }
})

module.exports = tasksRouter