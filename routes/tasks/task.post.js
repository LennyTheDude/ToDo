const express = require('express')
const router = express.Router()
const Task = require('../../models').Task

router.post('/task/', async (req, res) => {
    const task = req.body;
    console.log(task);
    if (task.taskName) {
        const newTask = await Task.create({taskName: task.taskName, isDone: false})
        res.status(200).send(newTask)
    } else {
        res.status(404).send('Can\'t create an empty task!')
    }
})

module.exports = router