const express = require('express')
const router = express.Router()
const User = require('../../models').User
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator');
const safeword = require('../../config/auth.config').secret


router.post('/signup/', 
    [
        check('name', 'Login must be longer, than 2 characters').isLength({
        min: 3,
        }),
        check('password', 'password must be longer than 5 characters').isLength({
        min: 6,
        }),
    ],
    async (req, res) => {
        try {
            const newUser = req.body;
            // console.log(newUser);
            // console.log(safeword);

            const existingUser = await User.findOne({ where: { name: newUser.name } })
            // console.log(existingUser);

            if (existingUser) {
                return res.status(400).send({message: 'User already exists'})
            }

            const createdUser = await User.create(newUser)
            const token = jwt.sign({ userId: createdUser.id, userName: createdUser.name}, safeword, {
                expiresIn: '1h',
            });
            // console.log(createdUser);
            res.status(200).json({
                token,
            });
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    })

module.exports = router