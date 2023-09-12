require('dotenv').config();
require('./config/database'); // Make sure this is configured properly

const Product = require('./models/product');

(async function () {

  // Clear existing products and create new ones
  await Product.deleteMany({});
  const products = await Product.create([
    { name: 'Snowboard', price: 300, description: 'Experience the thrill of the slopes with our high-quality snowboard. Designed for both beginners and experienced riders, this snowboard offers exceptional control and performance. Conquer the mountains with confidence and style.', img:'https://i.imgur.com/m9FdpMD.jpg' },
    { name: 'Bindings', price: 150, description: 'These reliable bindings are the perfect choice for securing your feet to the snowboard. Crafted with durability and comfort in mind, they ensure a snug fit and maximum maneuverability. Say goodbye to worries about stability on the slopes.',img:'https://i.imgur.com/OxhZXgU.jpg' },
    { name: 'Boots', price: 150, description: 'Step into ultimate comfort and warmth with our Boots. These boots are designed to keep your feet cozy while providing excellent support for your snowboarding adventures. Make every ride an enjoyable experience.', img:'https://i.imgur.com/hFGduaA.png'},
    { name: 'Goggles', price: 75, description: 'Enhance your vision on the mountain with our high-quality goggles. Offering superior clarity and protection, these goggles shield your eyes from harsh elements and UV rays. Enjoy crystal-clear views of the snow-covered landscape.', img:'https://i.imgur.com/VsHC0y0.jpg' },
    { name: 'Gloves', price: 50, description: "Keep your hands warm and protected with our versatile gloves. Designed for cold weather conditions, these gloves offer exceptional insulation and dexterity. Whether you're gripping your snowboard or building a snowman, your hands will stay cozy.", img:'https://i.imgur.com/SsHd3MI.png' },
    { name: 'Helmet', price: 90, description: 'Safety first! Our reliable helmet is a must-have for any snowboarding enthusiast. Featuring advanced protection technology and a comfortable fit, this helmet keeps your head secure as you conquer the slopes.', img:'https://i.imgur.com/VsELX8C.jpg' },
  ]);


  process.exit();
})();
