const express = require('express')
const router = express.Router()
const Task = require('../../models').Task

router.get('/tasks/', async (req, res) => {
    const tasks = await Task.findAll();
    res.send(tasks);
})

module.exports = router