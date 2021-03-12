const express = require('express')
const router = express.Router()
const Task = require('../../models').Task
const auth = require('../../middleware/auth.middleware')

router.get('/tasks/', auth, async (req, res) => {
 
    const params = {where:{}}
    
    if (req.query.filterBy === 'done') {
        params.where.isDone = true
    } else if (req.query.filterBy === 'undone') {
        params.where.isDone = false
    }

    params.where.ownerId = res.locals.userId;
    
    params.order = [['createdAt', req.query.orderBy ? req.query.orderBy : 'DESC']]
    
    params.offset = req.query.tasksPerPage * (req.query.pageNumber - 1);
    params.limit = req.query.tasksPerPage;
    const tasks = await Task.findAndCountAll(params);
 
    res.send(tasks);
})

module.exports = router