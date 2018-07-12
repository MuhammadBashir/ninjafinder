const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ninjango',{useNewUrlParser: true});
mongoose.Promise = global.Promise;

const app = express();

app.use(express.json());
app.use('/api', require('./routes/api'));
app.use(function(err, req, res, next){
    res.status(422).send({error: err._message});
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port: ${port}`));