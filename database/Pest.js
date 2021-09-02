/* eslint-disable sort-keys */
const { Schema, model } = require('mongoose');

const pestSchema = new Schema({
    price: {
        type: Number,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    purchase: {
        type: Number,
        required: true,
        trim: true,
        select: false
    },
    clasification: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

module.exports = model('pest', pestSchema);
