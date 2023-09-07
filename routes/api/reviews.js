const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/review')

router.get('/:productId', reviewsCtrl.getAll); 
router.post('/:productId', reviewsCtrl.create);
router.delete('/:productId/:reviewId', reviewsCtrl.deleteReview);

module.exports = router