const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/review')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/:productId', reviewsCtrl.getAll); 
router.post('/:productId',ensureLoggedIn, reviewsCtrl.create);
router.delete('/:productId/:reviewId',ensureLoggedIn, reviewsCtrl.deleteReview);
router.put('/:productId/:reviewId',ensureLoggedIn, reviewsCtrl.editReview);

module.exports = router