const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
    qty: { type: Number, default: 1},
    item: itemSchema
},{
    timestamps: true,
    // Add this to ensure virtuals are serialized
    toJSON: { virtuals: true }
});
// Add an extPrice to the line item
lineItemSchema.virtual('extPrice').get(function () {
    // 'this' is bound to the lineItem subdocument
    return this.qty * this.item.price;
});

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false},

},{
    timestamps: true,
    toJSON: { virtuals: true}
})

orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0)
});

orderSchema.virtual('totalQty').get(function () {
    return this.lineItems.reduce((total, item) => total + item.qty, 0)
})

orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase()
})