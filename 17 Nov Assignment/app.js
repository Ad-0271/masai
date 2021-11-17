const data = require('./MOCK_DATA.json');

const express = require('express');

const app = express();

app.listen(2700, () => {
    console.log('Server is running on port 2700');
})

app.get('/', (res, req) => {
    res.send('Welcome to HomePage');
}) 

app.get('/users', (res, req) => {
    res.send(data);
})