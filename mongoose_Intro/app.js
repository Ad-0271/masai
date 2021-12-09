const { timeStamp } = require('console');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/movies');
};

const movieSchema = new mongoose.Schema({
    movie_name: {type: String, required: true, unique: true},
    movie_genre: {type: String, required: true},
    production_year: {type: Number, required: true},
    budget: {type: Number, required: true}
}, {
    versionKey: false,
    timestamps: true
});

const Movie = mongoose.model('movie', movieSchema);

app.use(express.json());

app.get('/movie', async (req, res) => {
    try{
        const movies = await Movie.find().lean().exec();

        res.send(movies);
    } catch(anas){
        res.status(500).send({status: anas.message});
    }
});


app.get('/movie/:id', async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id).lean().exec();

        res.status(200).send(movie);
    } catch(e){
        res.status(500).send({status: 'wrong api', message: e.message});
    }
});


app.post('/adnan', async (req, res) => {
    try{
        const movie = await Movie.create(req.body);
    
        res.status(200).send(movie);
        
    } catch(e){
        res.status(500).send({status: e.message});
    }
});


app.patch('/movie/:id', async (req, res) => {
    try{
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();

        res.status(200).send(movie);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
});


app.delete('/movie/:id', async (req, res) => {
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();

        res.status(200).send(movie);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
});


app.listen(2701, async () => {
    await connect();
    console.log('server is running...');
})