const express = require('express')
const router = express.Router()
const User = require('../../models').User
const jwt = require('jsonwebtoken')
const safeword = require('../../config/auth.config').secret


router.post('/login/', async (req, res) => {
        try {
            const getUser = req.body;

            const existingUser = await User.findOne({ where: { name: getUser.name } });

            if (!existingUser) {
                return res.status(400).send({ message: 'User not found' })
            }

            if (getUser.password !== existingUser.password) {
                return res.status(400).send({ message: 'Incorrect password' })
            }
            
            const token = jwt.sign(
                { userId: existingUser.id, userName: existingUser.name },
                 safeword, {
                expiresIn: '1h',
                }
            );

            res.status(200).json({
                token
            });

        } catch (error) {
            res.status(500).send({message: error.message})
        }
    })

module.exports = router