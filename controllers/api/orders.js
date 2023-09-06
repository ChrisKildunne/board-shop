const Order = require('../../models/order');

async function cart(req,res){
    const cart = await Order.getCart(req.user._id)
    
    res.json(cart)
}
async function addToCart(req,res){
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id);
    res.json(cart)
}
async function setProductQtyInCart(req,res){
    const cart = await Order.getCart(req.user._id);
    await cart.setProductQty(req.body.productId, req.body.newQty);
    console.log(req.body.qty)
    res.json(cart)

}
async function checkout(req,res){

}
module.exports = {
    cart,
    addToCart,
    setProductQtyInCart
   
  };