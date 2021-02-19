const express = require('express')
const router = express.Router()
const Task = require('../../models').Task

router.get('/tasks/', async (req, res) => {
    console.log(req.body);
    const tasks = await Task.findAll({
        order: [
            ['createdAt', 'ASC']
        ]
    });
    res.send(tasks);
})

module.exports = router