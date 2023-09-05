require('dotenv').config();
require('./config/database'); // Make sure this is configured properly

const Product = require('./models/product');

(async function () {

  // Clear existing products and create new ones
  await Product.deleteMany({});
  const products = await Product.create([
    { name: 'Snowboard', price: 300, description: 'A Snowboard' },
    { name: 'Bindings', price: 150, description: 'Good Bindings' },
    { name: 'Boots', price: 300, description: 'Burton Boots'},
    { name: 'Goggles', price: 75, description: 'Great Goggles' },
  ]);

  console.log(products);

  process.exit();
})();
