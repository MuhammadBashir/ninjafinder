const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();


router.get('/ninjas', function(req, res, next){
    res.send(Ninja.find(n => n.name === 'Choi Tinda'));
});

router.post('/ninjas',function(req, res, next){
   Ninja.create(req.body).then(function(ninja) {
    res.send(ninja);
   }).catch(next);
});

router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja) {
            res.send(ninja);
        });
        
    }).catch(next);
});

router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

module.exports = router;