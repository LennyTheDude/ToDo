require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const klawSync = require('klaw-sync');
const path = require('path')
const {Sequelize, sequelize} = require('./models/index')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json({ extended: false });
const cors = require('cors');

app.use(cors());
app.use(jsonParser);

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

useControllers()

app.use(express.static("public"));


app.listen(PORT, () => {console.log(`app started on port ${PORT}`)})