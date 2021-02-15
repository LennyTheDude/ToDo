const express = require('express')
const tasksRouter = express.Router()
const models = require('../../models')

tasksRouter.delete('/tasks/:id?', (req, res) => {
    const taskId = req.query.id;
    models.Task.destroy({where: {id: taskId}})
    .then(res.send('Task deleted!'));
})

module.exports = tasksRouter