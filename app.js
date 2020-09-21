const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const connection = require('./utils/dbConnection').mongoConnect;

const app = express();

app.use(bodyParser.json());

app.use("/", feedRoutes)

const port = 3000

connection(
    app.listen(port),
    console.log('Serving on Port 3000')
);
