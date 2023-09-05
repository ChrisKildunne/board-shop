const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = require('./productSchema')

module.exports = mongoose.model('Product', productSchema)