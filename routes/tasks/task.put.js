const express = require('express')
const router = express.Router()
const Task = require('../../models').Task

router.put('/task/', async (req, res) => {
    
    const updateTask = req.body;

    if (!updateTask.taskId) {
        res.send("not found");
    }

    const newTask = {};
    if (updateTask.hasOwnProperty('name')) { newTask.taskName = updateTask.name }
    if (updateTask.hasOwnProperty('isDone')) { newTask.isDone = updateTask.isDone }

    const editedTask = await Task.update(
        newTask, 
        { where: {id: updateTask.taskId}, returning: true, plain: true}
    );
    
    res.status(200).send(editedTask[1])
})

module.exports = router