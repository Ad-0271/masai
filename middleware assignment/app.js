let books = require('./books.json');

const express = require('express');

const app = express();

app.use(express.json())

const logger = (req, res, next) => {
    req.api_requested_by = "Adnan";
    next();
}

app.use(logger);

app.get('/', (req, res) => {
    res.send({api_requested_by: req.api_requested_by, books});
})

app.get('/books/:id', (req, res) => {
    const book = books.filter((el) => {
        return el.id == req.params.id;
    });
    res.send({api_requested_by : req.api_requested_by, book});
})

app.post('/books', (req, res) => {
    books.push(req.body);
    res.send({api_requested_by : req.api_requested_by, books});
})

app.patch('/books/:id', (req, res) => {
    books = books.map((el) => {
        if (el.id == req.params.id){
            if (req?.body?.author) el.author = req.body.author;
            if (req?.body?.book_name) el.book_name = req.body.book_name;
            if (req?.body?.pages) el.pages = req.body.pages;
            if (req?.body?.published_year) el.published_year = req.body.published_year;
        }
        return el;
    });

    res.send({api_requested_by: req.api_requested_by, books});
})

app.delete('/books/:id', (req, res) => {
    books = books.filter((el) => {
        return el.id != req.params.id;
    })

    res.send({api_requested_by: req.api_requested_by, books})
})

app.listen(2701, () => {
    console.log('server is running...')
});