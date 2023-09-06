const Review = require('../../models/review')
const Product = require('../../models/product')


async function create(req, res) {
    try {
        const { text, rating } = req.body;
        const review = await Review.create({
            user: req.user._id,
            text,
            rating,
            product: req.params.productId
        });
        console.log(review);
        res.json(review);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

async function getAll(req, res) {
    try {
        const productId = req.params.productId; 
        console.log("this is the id",productId)
        const reviews = await Review.find({ product: productId });
        res.json(reviews);
    } catch (err) {
        console.error(err);
    }
}


module.exports ={
    create,
    getAll
}