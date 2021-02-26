const express = require('express')
const router = express.Router()
const Task = require('../../models').Task

router.get('/tasks/', async (req, res) => {
 
    const params = {}
 
    if (req.query.filterBy === 'done') {
        params.where = { isDone: true }
    } else if (req.query.filterBy === 'undone') {
        params.where = { isDone: false }
    }

    if (req.query.orderBy) {
        params.order = [['createdAt', req.query.orderBy]]
    }

    const tasks = await Task.findAll(params);
 
    res.send(tasks);
})

module.exports = router