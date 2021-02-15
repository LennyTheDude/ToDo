const express = require('express')
const tasksRouter = express.Router()
const models = require('../../models')

tasksRouter.get('/', (req, res) => {
    models.Task.findAll().then(tasks=>{res.send(tasks)})
})

module.exports = tasksRouter