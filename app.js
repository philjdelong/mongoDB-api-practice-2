const express = require('express');
// const session = require('express-session');
const bodyParser = require('body-parser');

const connection = require('./utils/dbConnection').mongoConnect;

const feedRoutes = require('./routes/feed');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

app.use("/", feedRoutes)
app.use("/user", userRoutes)
app.use("/auth", authRoutes)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
})

connection(
    app.listen(3000),
    console.log('Serving on localhost:3000')
);
