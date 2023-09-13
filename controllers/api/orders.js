const Order = require('../../models/order');
const Product = require('../../models/product');
const stripe = require('stripe')('sk_test_51No6rMEVc2xdoRcSmISZGDgn4yF6b6OB43dWI0Av8GWDtTKee9u26fIbDCaaXHDoxSZ99UG8xZE6Zw2pmyouaIQe00XpLUNAG7');

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
    res.json(cart);
}

async function getPastOrders(req,res){
    const pastOrders = await Order.find({user: req.user._id, isPaid: true})
    for(const order of pastOrders){
        await order.save()
    }
    res.json(pastOrders)
}

async function createPaymentIntent(req, res) {
    try {
        const cart = await Order.getCart(req.params.userId);
        const totalPrice = (cart.orderTotal) * 100 ;
        console.log(totalPrice)
        const intent = await stripe.paymentIntents.create({
        amount: totalPrice,
        currency: 'usd',
        confirmation_method: 'automatic', 
      });
      res.json({ clientSecret: intent.client_secret }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create Payment Intent' });
    }
  }
  
async function getOrderTotal(req, res){
    try {
        const cart = await Order.getCart(req.params.userId);
        const totalPrice = cart.orderTotal;
        console.log(totalPrice)
        res.json(totalPrice)
    }catch(error){
        console.error(error)
    }
}
module.exports = {
    cart,
    addToCart,
    setProductQtyInCart,
    checkout,
    getPastOrders,
    createPaymentIntent,
    getOrderTotal
   
  };