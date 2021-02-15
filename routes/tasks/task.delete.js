const express = require('express')
const router = express.Router()
const Task = require('../../models').Task

router.delete('/task/', async (req, res) => {
    const taskId = req.body.taskId;
    if (taskId) {
        const taskToDelete = await Task.destroy({where: {id: taskId}})
        const tasks = await Task.findAll();    
        res.status(200).send(tasks)
    } else {
        res.status(404).send('No such task found')
    }
})

module.exports = router