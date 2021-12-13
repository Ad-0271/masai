const express = require('express');

const app = express();

const connect = require('./configs/db');

const userController = require('./controllers/user.controller');
const movieController = require('./controllers/movie.controller');
const screenController = require('./controllers/screen.controller');
const seatController = require('./controllers/seat.controller');
const showController = require('./controllers/show.controller');
const theatreController = require('./controllers/theatre.controller');

app.use(express.json())

app.use('/users', userController);
app.use('/movies', movieController);
app.use('/screens', screenController);
app.use('/seats', seatController);
app.use('/shows', showController);
app.use('/theatres', theatreController);

app.listen(2701, async () => {
    await connect();
    console.log('server is running at port 2701...')
})