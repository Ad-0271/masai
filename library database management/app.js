const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connect = () => {
    return mongoose.connect('mongodb+srv://adnan:adnan@cluster0.pptrd.mongodb.net/library');
} ;

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true}
}, {
    versionKey: false,
})

const User = mongoose.model('user', userSchema);

const sectionSchema = new mongoose.Schema({
    section_name: {type: String, required: true}
}, {
    versionKey: false,
})

const Section = mongoose.model('section', sectionSchema);

const authorSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user",
        required: true
    }
}, {
    versionKey: false,
});

const Author = mongoose.model('author', authorSchema);

const bookSchema = new mongoose.Schema({
    book_name: {type: String, required: true},
    body: {type: String, required: true},
    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section", 
        required: true
    },
    author_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true
    }]
}, {
    versionKey: false
});

const Book = mongoose.model('book', bookSchema);

const checkedoutSchema = new mongoose.Schema({
    user_id:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true
    }
}, {
    versionKey: false
});

const Checkedout = mongoose.model('checkedout', checkedoutSchema);

app.use(express.json());


//API's for assignment is at the bottom

// CRUD operations for user
app.get('/users', async (req, res) => {
    try{
        const users = await User.find().lean().exec();
        res.send(users);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
});

app.post('/user', async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.send(user);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
});

app.patch('/user/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        res.send(user);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
});

app.delete('/user/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.send(user);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
});


// CRUD operations for author

app.get('/authors', async (req, res) => {
    try{
        const authors = await Author.find().lean().exec();
        res.send(authors);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

app.post('/author', async (req, res) => {
    try{
        const author = await Author.create(req.body);
        res.send(author);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

app.patch('/author', async (req, res) => {
    try{
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        res.send(author);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

app.delete('/author', async (req, res) => {
    try{
        const author = await Author.findByIdAndDelete(req.params.id).lean().exec();
        res.send(author);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})


// CRUD operation for Section model

app.get('/sections', async (req, res) => {
    try{
        const sections = await Section.find().lean().exec();
        res.send(sections);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

app.post('/section', async (req, res) => {
    try{
        const section = await Section.create(req.body);
        res.send(section);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})


// CRUD operations for Book model

app.get('/books', async (req, res) => {
    try{
        const books = await Book.find().populate({path: "section_id", select: "section_name"}).populate({path: "author_id", populate : {path: "user_id", model: "user", select: "first_name last_name"}}).lean().exec();
        res.send(books);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

app.post('/book', async (req, res) => {
    try{
        const book = await Book.create(req.body);
        res.send(book);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

app.patch('/book/:id', async (req, res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        res.send(book);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})


// CRUD operations for Checkout Model

app.get('/checkedouts', async (req, res) => {
    try{
        const checkedouts = await Checkedout.find().lean().exec();
        res.send(checkedouts);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

app.post('/checkout', async (req, res) => {
    try{
        const checkedouts = await Checkedout.find({book_id : {$in: req.body.book_id}}).lean().exec();
        if (checkedouts.length) {
            return res.send({status: 'fail', message: 'Sorry this book is already checked out by another user'});
        }

        const checkout = await Checkedout.create(req.body);
        res.send(checkout);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
});

app.delete('/checkout/:id', async (req, res) => {
    try{
        const checkedouts = await Checkedout.findByIdAndDelete(req.params.id).lean().exec();
        res.send(checkedouts);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})


// API for assignments

//finding books that are checkedout
app.get('/checkedout/books', async(req, res) => {
    try{
        const checkedouts = await Checkedout.find().populate("user_id").populate({path: "book_id", populate: {path: "section_id", model: "section"}}).lean().exec();
        res.send(checkedouts);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
});

//finding books written by an author
app.get('/author/:id/books', async (req, res) => {
    try{
        const books = await Book.find({author_id: {$in: req.params.id}}).populate("section_id").populate("author_id").lean().exec();
        res.send(books);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

//finding books in a particular section
app.get('/section/:id/books', async (req, res) => {
    try{
        const books = await Book.find({section_id: {$eq: req.params.id}}).populate("section_id").populate("author_id").lean().exec();
        res.send(books);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

//finding books in a section that are not checkedout
app.get('/section/:id/booksnotcheckedout', async (req, res) => {
    try{
        let checkedout = await Checkedout.find().lean().exec();
        checkedout = checkedout.map(el => el.book_id.valueOf());
        console.log(checkedout)
        const books = await Book.find({$and : [{_id: {$not: {$in: checkedout}}}, {section_id: {$eq: req.params.id}}]}).populate("section_id").populate("author_id").lean().exec();
        res.send(books);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

// finding books of the author in a section
app.get('/author/:auth_id/section/:sec_id', async (req, res) => {
    try{
        const books = await Book.find({$and : [{author_id: {$in: req.params.auth_id}}, {section_id: {$eq: req.params.sec_id}}]}).populate("section_id").populate("author_id").lean().exec();
        res.send(books);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

app.listen(2701, () => {
    connect();
    console.log("sever is running at port 2701...");
})