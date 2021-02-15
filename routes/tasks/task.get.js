const express = require('express')
const tasksRouter = express.Router()
const models = require('../../models')

tasksRouter.get('/tasks/:id?', (req, res) => {
    const taskId = req.query.id;
    models.Task.findOne({where: {id: taskId}})
    .then(tasks=>{res.send(tasks)});
})

module.exports = tasksRouter