const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();


router.get('/ninjas', function (req, res, next) {
    Ninja.aggregate().near({
        near: {
            type: 'Point',
            coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        maxDistance: 10000000,
        spherical: true,
        distanceField: "dis"
    }).then(function(ninjas){
        res.send(ninjas);
    }).catch(next);
});

router.post('/ninjas', function (req, res, next) {
    Ninja.create(req.body).then(function (ninja) {
        res.send(ninja);
    }).catch(next);
});

router.put('/ninjas/:id', function (req, res, next) {
    Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Ninja.findOne({ _id: req.params.id }).then(function (ninja) {
            res.send(ninja);
        });

    }).catch(next);
});

router.delete('/ninjas/:id', function (req, res, next) {
    Ninja.findByIdAndRemove({ _id: req.params.id }).then(function (ninja) {
        res.send(ninja);
    }).catch(next);
});

module.exports = router;