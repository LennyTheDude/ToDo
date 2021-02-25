const express = require('express')
const router = express.Router()
const Task = require('../../models').Task

router.delete('/task/', async (req, res) => {
    const taskId = req.body.taskId;
    if (taskId) {
        await Task.destroy({where: {id: taskId}})
        res.status(200).send()
    } else {
        res.status(404).send('No such task found')
    }
})

module.exports = router