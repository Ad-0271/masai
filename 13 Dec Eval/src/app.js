const express = require('express');

const app = express();

const connect = require('./configs/db');

app.listen(2701, async () => {
    await connect();
    console.log('server is running at port 2701...')
})