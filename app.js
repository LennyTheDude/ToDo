require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

tasksList = [
    {
        id: 0,
        name: "wake up",
        isDone: false
    },
    {
        id: 1,
        name: "roll up",
        isDone: false
    },
    {
        id: 2,
        name: "blaze up",
        isDone: false
    },
    {
        id: 3,
        name: "eat up",
        isDone: false
    },
    {
        id: 4,
        name: "listen up",
        isDone: false
    }
]

const tasksGet = require('./routes/tasks/tasks.get')
app.use('/tasks/', tasksGet)

const taskGet = require('./routes/tasks/task.get')
app.use('/tasks/', taskGet)

const taskPost = require('./routes/tasks/task.post')
app.use('/tasks/', taskPost)

const taskPut = require('./routes/tasks/task.put')
app.use('/tasks/', taskPut)

const taskDelete = require('./routes/tasks/task.delete')
app.use('/tasks/', taskDelete)

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`)
})