const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

const NinjaSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    rank: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
