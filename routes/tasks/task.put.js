const express = require('express')
const router = express.Router()
const Task = require('../../models').Task

router.put('/task/', async (req, res) => {
    const updateTask = req.body;
    console.log(updateTask);
    if (!updateTask.taskId) {
        res.send("not found");
    }

    if (updateTask.name) {
        const editTask = await Task.update(
            { taskName: updateTask.name}, 
            { where: {id: updateTask.taskId}}
        )
    } else {
        const editTask = await Task.update(
            { isDone: updateTask.isDone}, 
            { where: {id: updateTask.taskId}}
        )
    }

    const task = await Task.findOne({where: {id: updateTask.taskId}});    
    // console.log(task);
    res.status(200).send(task)
})

module.exports = router