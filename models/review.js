const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema');

const reviewSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    text: {type: String},
    rating: {type: Number},
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true }
},{
    timestamps: true
})

module.exports = mongoose.model('Reviews', reviewSchema)