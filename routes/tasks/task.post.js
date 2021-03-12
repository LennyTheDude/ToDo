const express = require('express')
const router = express.Router()
const Task = require('../../models').Task
const auth = require('../../middleware/auth.middleware')

router.post('/task/', auth, async (req, res) => {
    const task = req.body;
    console.log(task);
    if (task.taskName) {
        const newTask = await Task.create({taskName: task.taskName, isDone: false, ownerId: res.locals.userId})
        res.status(200).send(newTask)
    } else {
        res.status(404).send('Can\'t create an empty task!')
    }
})

module.exports = router