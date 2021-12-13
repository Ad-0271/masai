const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect('mongodb+srv://adnan:adnan@cluster0.pptrd.mongodb.net/movie')
}