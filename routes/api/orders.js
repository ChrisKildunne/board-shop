const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

router.get('/cart', ordersCtrl.cart)

router.post('/cart/products/:id',ordersCtrl.addToCart)

module.exports = router;