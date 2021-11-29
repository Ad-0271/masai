const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connect = () => {
    return mongoose.connect('mongodb+srv://adnan:adnan@cluster0.pptrd.mongodb.net/eval');
}

const companySchema = new mongoose.Schema({
    company_name: {type: String, required: true},
    company_address: {type: String, required: true},
    
}, {
    versionKey: false,
    timestamps: true
});

const jobSchema = new mongoose.Schema({
    job_title: {type: String, required: true},
    job_type: {type: String, required: true}

}, {
    versionKey: false,
    timestamps: true
})

const Company = mongoose.model('company', companySchema);

const Job = mongoose.model('job', jobSchema);

app.use(express.json());

// CRUD for company
app.get('/company', async (req, res) => {
    try{
        const companies = await Company.find().lean().exec();
        
        res.status(200).send(companies);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message});
    }
})

app.post('/company', async (req, res) => {
    try{
        const company = await Company.create(req.body);
    
        res.status(200).send(company);
        
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message})
    }
})



// CRUD for job

app.post('/job', async (req, res) => {
    try{
        const job = await Job.create(req.body);

        res.status(200).send(job);
    } catch(e){
        res.status(500).send({status: 'fail', message: e.message})
    }
})

app.listen(2701, () => {
    connect();
    console.log('server is running...');
});