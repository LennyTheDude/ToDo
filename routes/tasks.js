const express = require('express')
const tasksRouter = express.Router()

const tasksList = [
    {
        taskId: 0,
        name: "wake up",
        isdone: false
    },
    {
        taskId: 1,
        name: "roll up",
        isdone: false
    },
    {
        taskId: 2,
        name: "blaze up",
        isdone: false
    },
    {
        taskId: 3,
        name: "eat up",
        isdone: false
    },
    {
        taskId: 4,
        name: "listen up",
        isdone: false
    }
]


// show a message on the tasks page when loaded
// tasksRouter.get('/', (req, res) => {
//     res.send('Wanted tasks? Here you go then.')
// });

// show all tasks
tasksRouter.get('/', (req, res, next) => {
    res.send(tasksList)
})

// show task by id
tasksRouter.get('/:id', (req, res, next) => {
    const task = tasksList[req.params.id]
    if (task) {
        res.status(200).send(task)
    } else {
        res.status(404).send('No such task in the list')
    }
})

// add new tasks
tasksRouter.post('/', (req, res, next) => {
    const task = req.query;
    console.log(task);
    if (task.taskId && task.name && task.isdone) {
        tasksList.push(task)
        res.status(201).send(task)
    } else {
        res.status(404).send('Unable to add task to the list')
    }
})

// delete single task
tasksRouter.delete('/', (req, res, next) => {
    const taskId = req.query.taskId;
    const task = tasksList[taskId];
    if (task) {
        tasksList.splice(taskId, 1)
        res.status(204).send('Task successfully deleted')
    } else {
        res.status(404).send('No task with such ID found in the list')
    }
})


module.exports = tasksRouter