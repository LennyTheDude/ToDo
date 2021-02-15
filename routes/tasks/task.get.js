const express = require('express')
const router = express.Router()
const Task = require('../../models').Task

router.get('/task/', async (req, res) => {
    const taskId = req.body.taskId;
    const wantedTask = await Task.findOne({where: {id: taskId}});
    if (wantedTask) {
        res.status(200).send(wantedTask)
    } else {
        res.status(404).send('Not found')
    }
})

module.exports = router