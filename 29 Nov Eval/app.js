const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/eval');
}

const companySchema = new mongoose.Schema({
    company_name: {type: String, required: true},
    company_address: {type: String, required: true},
    
});

const Company = mongoose.model('company', companySchema);

app.post('/company', (req, res) => {
    const company = await Company.create()
})


app.listen(2701, () => {
    connect();
    console.log('server is running...');
});