const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema');


const lineItemSchema = new Schema ({
    qty: {type: Number, default: 1},
    product: productSchema
},{
    timestamps: true,
    toJSON: { virtuals : true}
})

lineItemSchema.virtual('extPrice').get(function () {
    return this.qty * this.product.price;
})


const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false},

},{
    timestamps: true,
    toJSON: { virtuals: true}
})


orderSchema.virtual('orderTotal').get( function () {
    return this.lineItems.reduce((total, item) => total + product.extPrice, 0)
})
orderSchema.virtual('totalQty').get( function () {
    return this.lineItems.reduce((total,item) => total + product.qty, 0)
})
orderSchema.virtual('orderId').get(function () {
    return this.id.slice(-6).toUpperCase();
})

orderSchema.methods.addItemToCart = async function(productId){
    const existingProduct = this.cart.find((item) => product.productId.equals(productId));

    if(existingProduct){
        existingProduct.qty += 1;
    } else {
        this.cart.push({ productId })
    }
    await this.save()
}

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user : userId },
        { upsert: true, new: true}
    );
};

module.exports = mongoose.model('Order', orderSchema)