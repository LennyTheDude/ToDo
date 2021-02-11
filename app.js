if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

// show a message on the main page when loaded
app.get('/', (req, res) => {
    res.send('TODO-DO-DO-BE-DO-POW.')
});

const tasksRouter = require('./routes/tasks.js')
app.use('/tasks', tasksRouter)

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`)
})





/* // connection to the DB

const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

async function start() {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }      
}

start()
*/