const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const order = require('../../models/order');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.get('/cart', ensureLoggedIn, ordersCtrl.cart)

router.post('/cart/products/:id', ensureLoggedIn ,ordersCtrl.addToCart)

router.put('/cart/qty',ensureLoggedIn, ordersCtrl.setProductQtyInCart)

router.post('/cart/checkout',ensureLoggedIn,  ordersCtrl.checkout);

router.get('/user/:userId/orders',ensureLoggedIn, ordersCtrl.getPastOrders);

router.post('/createPaymentIntent/:userId', ordersCtrl.createPaymentIntent);

router.get('/user/:userId/total-price', ensureLoggedIn, ordersCtrl.getOrderTotal);

module.exports = router;