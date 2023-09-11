const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const order = require('../../models/order');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.get('/cart', ordersCtrl.cart)

router.post('/cart/products/:id',ordersCtrl.addToCart)

router.put('/cart/qty',ordersCtrl.setProductQtyInCart)

router.post('/cart/checkout', ordersCtrl.checkout);

router.get('/user/:userId/orders', ordersCtrl.getPastOrders);

router.post('/createPaymentIntent/:userId', ordersCtrl.createPaymentIntent);

router.get('/user/:userId/total-price', ordersCtrl.getOrderTotal);

module.exports = router;