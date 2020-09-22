const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./utils/dbConnection').mongoConnect;

const feedRoutes = require('./routes/feed');
const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());

app.use("/api/v1", feedRoutes)
app.use("/user", userRoutes)

connection(
    app.listen(3000),
    console.log('Serving on localhost:3000')
);
