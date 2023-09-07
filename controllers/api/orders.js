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
    res.json(cart)

}
async function checkout(req,res){
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    console.log(cart)
    res.json(cart);
}

async function getPastOrders(req,res){
    const pastOrders = await Order.find({user: req.user._id, isPaid: true})
    for(const order of pastOrders){
        await order.save()
        console.log(order)
    }
    res.json(pastOrders)
}
module.exports = {
    cart,
    addToCart,
    setProductQtyInCart,
    checkout,
    getPastOrders
   
  };