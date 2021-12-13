const getAll = (model) => async (req, res) => {
    try{
        const items = await model.find().lean().exec();
        
        res.status(200).send(items);
    } catch(e) {
        res.status(500).send({status: 'fail', message: e.message});
    }
}

const getOne = (model) => async (req, res) => {
    try{
        const item = await model.findById(req.params.id).lean().exec();
        
        res.status(200).send(item);
    } catch(e) {
        res.status(500).send({status: 'fail', message: e.message});
    }
}

const post = (model) => async (req, res) => {
    try{
        const item = await model.create(req.body);

        res.status(200).send(item);
    } catch(e) {
        res.status(500).send({status: 'fail', message: e.message});
    }
};

const updateOne = (model) => async (req, res) => {
    try{
        const item = await model.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();

        res.status(200).send(item);
    } catch(e) {
        res.status(500).send({status: 'fail', message: e.message});
    }
}

const deleteOne = (model) => async (req, res) => {
    try{
        const item = await model.findByIdAndDelete(req.params.id).lean().exec();

        res.status(200).send(item);
    } catch(e) {
        res.status(500).send({status: 'fail', message: e.message});
    }
}

module.exports = {
    post,
    getAll,
    getOne,
    updateOne,
    deleteOne
}