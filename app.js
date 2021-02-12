require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const klawSync = require('klaw-sync');
const path = require('path')

async function useControllers() {
    const paths = klawSync(`${__dirname}/routes`, {nodir: true});
    let controllersCount = 0;
    paths.forEach((file) => {
        if (path.basename(file.path)[0] === '_' || path.basename(file.path)[0] === '.') return;
        app.use('/', require(file.path));
        controllersCount++;
    });
    console.info(`Total controllers: ${controllersCount}`);
}

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

useControllers()

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`)
})