const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const connection = require('./utils/dbConnection').mongoConnect;

const app = express();

app.use(bodyParser.json());

app.use("/", feedRoutes)

connection(
    app.listen(3000),
    console.log('Serving on localhost:3000')
);
