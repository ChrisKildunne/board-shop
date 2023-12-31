const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cat: {
        type: String,
        
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
}, {
    timestamps: true,
});

module.exports = productSchema