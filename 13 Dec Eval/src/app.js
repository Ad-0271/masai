const express = require('express');

const app = express();

const connect = require('./configs/db');

const userController = require('./controllers/user.controller');


app.use('/users', userController);

app.listen(2701, async () => {
    await connect();
    console.log('server is running at port 2701...')
})