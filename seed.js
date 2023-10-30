require('dotenv').config();
require('./config/database'); // Make sure this is configured properly

const Product = require('./models/product');

(async function () {

  // Clear existing products and create new ones
  await Product.deleteMany({});
  const products = await Product.create([
    { name: 'Burton Free Thinker', price: 349.99, description: 'Experience the thrill of the slopes with our high-quality snowboard. Designed for both beginners and experienced riders, this snowboard offers exceptional control and performance. Conquer the mountains with confidence and style.', img:'https://i.imgur.com/m9FdpMD.jpg' },
    { name: 'Nitro Slash', price: 449.99, description: 'Experience the thrill of the slopes with our high-quality snowboard. Designed for both beginners and experienced riders, this snowboard offers exceptional control and performance. Conquer the mountains with confidence and style.', img:'https://i.imgur.com/m9FdpMD.jpg' },
    { name: 'Jones Dream Weaver', price: 499.95, description: 'Experience the thrill of the slopes with our high-quality snowboard. Designed for both beginners and experienced riders, this snowboard offers exceptional control and performance. Conquer the mountains with confidence and style.', img:'https://i.imgur.com/m9FdpMD.jpg' },
    { name: 'Salomon Super 8 Pro Snowboard', price: 399.95, description: 'Experience the thrill of the slopes with our high-quality snowboard. Designed for both beginners and experienced riders, this snowboard offers exceptional control and performance. Conquer the mountains with confidence and style.', img:'https://i.imgur.com/m9FdpMD.jpg' },
    { name: 'Ride Warpig 2023', price: 379.99, description: 'Experience the thrill of the slopes with our high-quality snowboard. Designed for both beginners and experienced riders, this snowboard offers exceptional control and performance. Conquer the mountains with confidence and style.', img:'https://i.imgur.com/m9FdpMD.jpg' },
    { name: 'Arbor Spruce Bindings', price: 99.99, description: 'These reliable bindings are the perfect choice for securing your feet to the snowboard. Crafted with durability and comfort in mind, they ensure a snug fit and maximum maneuverability. Say goodbye to worries about stability on the slopes.',img:'https://i.imgur.com/OxhZXgU.jpg' },
    { name: 'Women\'s Arbor Acacia Bindings', price: 93.96, description: 'These reliable bindings are the perfect choice for securing your feet to the snowboard. Crafted with durability and comfort in mind, they ensure a snug fit and maximum maneuverability. Say goodbye to worries about stability on the slopes.',img:'https://i.imgur.com/OxhZXgU.jpg' },
    { name: 'Burton HitchHiker Splitboard Bindings', price: 82.79, description: 'These reliable bindings are the perfect choice for securing your feet to the snowboard. Crafted with durability and comfort in mind, they ensure a snug fit and maximum maneuverability. Say goodbye to worries about stability on the slopes.',img:'https://i.imgur.com/OxhZXgU.jpg' },
    { name: 'Rossignol Rookie Snowboard Bindings', price: 87.99, description: 'These reliable bindings are the perfect choice for securing your feet to the snowboard. Crafted with durability and comfort in mind, they ensure a snug fit and maximum maneuverability. Say goodbye to worries about stability on the slopes.',img:'https://i.imgur.com/OxhZXgU.jpg' },
    { name: 'Rossignol Battle Snowboard Bindings', price: 99.95, description: 'These reliable bindings are the perfect choice for securing your feet to the snowboard. Crafted with durability and comfort in mind, they ensure a snug fit and maximum maneuverability. Say goodbye to worries about stability on the slopes.',img:'https://i.imgur.com/OxhZXgU.jpg' },
    { name: 'Union Flie Pro Snowboard Bingins', price: 179.95, description: 'These reliable bindings are the perfect choice for securing your feet to the snowboard. Crafted with durability and comfort in mind, they ensure a snug fit and maximum maneuverability. Say goodbye to worries about stability on the slopes.',img:'https://i.imgur.com/OxhZXgU.jpg' },
    { name: 'ThirtyTwo Light JP Snowboard Boots', price: 187.49, description: 'Step into ultimate comfort and warmth with our Boots. These boots are designed to keep your feet cozy while providing excellent support for your snowboarding adventures. Make every ride an enjoyable experience.', img:'https://i.imgur.com/hFGduaA.png'},
    { name: 'Burton Men\'s Snowboar Boots BOA', price: 649.95, description: 'Step into ultimate comfort and warmth with our Boots. These boots are designed to keep your feet cozy while providing excellent support for your snowboarding adventures. Make every ride an enjoyable experience.', img:'https://i.imgur.com/hFGduaA.png'},
    { name: 'Nitro Incline TLS', price: 379.90, description: 'Step into ultimate comfort and warmth with our Boots. These boots are designed to keep your feet cozy while providing excellent support for your snowboarding adventures. Make every ride an enjoyable experience.', img:'https://i.imgur.com/hFGduaA.png'},
    { name: 'Salomon Faction BOA', price: 167.95, description: 'Step into ultimate comfort and warmth with our Boots. These boots are designed to keep your feet cozy while providing excellent support for your snowboarding adventures. Make every ride an enjoyable experience.', img:'https://i.imgur.com/hFGduaA.png'},
    { name: 'Vans Hi Standard OG Snowboard Boots 8', price: 159.99, description: 'Step into ultimate comfort and warmth with our Boots. These boots are designed to keep your feet cozy while providing excellent support for your snowboarding adventures. Make every ride an enjoyable experience.', img:'https://i.imgur.com/hFGduaA.png'},
    { name: 'Oakley Flight Deck', price: 107.99, description: 'Enhance your vision on the mountain with our high-quality goggles. Offering superior clarity and protection, these goggles shield your eyes from harsh elements and UV rays. Enjoy crystal-clear views of the snow-covered landscape.', img:'https://i.imgur.com/VsHC0y0.jpg' },
    { name: 'Smith Frontier', price: 40, description: 'Enhance your vision on the mountain with our high-quality goggles. Offering superior clarity and protection, these goggles shield your eyes from harsh elements and UV rays. Enjoy crystal-clear views of the snow-covered landscape.', img:'https://i.imgur.com/VsHC0y0.jpg' },
    { name: 'Dragon PXV Low Bridge Fit', price: 119.99, description: 'Enhance your vision on the mountain with our high-quality goggles. Offering superior clarity and protection, these goggles shield your eyes from harsh elements and UV rays. Enjoy crystal-clear views of the snow-covered landscape.', img:'https://i.imgur.com/VsHC0y0.jpg' },
    { name: 'Salomon LoFi Sigma Goggles', price: 56.49, description: 'Enhance your vision on the mountain with our high-quality goggles. Offering superior clarity and protection, these goggles shield your eyes from harsh elements and UV rays. Enjoy crystal-clear views of the snow-covered landscape.', img:'https://i.imgur.com/VsHC0y0.jpg' },
    { name: 'Burton Men\'s GORE-TEX Gloves', price: 159.95, description: "Keep your hands warm and protected with our versatile gloves. Designed for cold weather conditions, these gloves offer exceptional insulation and dexterity. Whether you're gripping your snowboard or building a snowman, your hands will stay cozy.", img:'https://i.imgur.com/SsHd3MI.png' },
    { name: 'Burton Men\'s GORE-TEX Mittens', price: 179.95, description: "Keep your hands warm and protected with our versatile gloves. Designed for cold weather conditions, these gloves offer exceptional insulation and dexterity. Whether you're gripping your snowboard or building a snowman, your hands will stay cozy.", img:'https://i.imgur.com/SsHd3MI.png' },
    { name: 'North Face Men\'s Montant Ski Mitts', price: 65, description: "Keep your hands warm and protected with our versatile gloves. Designed for cold weather conditions, these gloves offer exceptional insulation and dexterity. Whether you're gripping your snowboard or building a snowman, your hands will stay cozy.", img:'https://i.imgur.com/SsHd3MI.png' },
    { name: 'Dakine Crossfire Gloves', price: 89.95, description: "Keep your hands warm and protected with our versatile gloves. Designed for cold weather conditions, these gloves offer exceptional insulation and dexterity. Whether you're gripping your snowboard or building a snowman, your hands will stay cozy.", img:'https://i.imgur.com/SsHd3MI.png' },
    { name: 'Giro Ldge MIPS Helmet 2024', price: 104.95, description: 'Safety first! Our reliable helmet is a must-have for any snowboarding enthusiast. Featuring advanced protection technology and a comfortable fit, this helmet keeps your head secure as you conquer the slopes.', img:'https://i.imgur.com/VsELX8C.jpg' },
    { name: 'POC Fornix Mips Helment', price: 100, description: 'Safety first! Our reliable helmet is a must-have for any snowboarding enthusiast. Featuring advanced protection technology and a comfortable fit, this helmet keeps your head secure as you conquer the slopes.', img:'https://i.imgur.com/VsELX8C.jpg' },
    { name: 'Anon Raider 3', price: 99.99, description: 'Safety first! Our reliable helmet is a must-have for any snowboarding enthusiast. Featuring advanced protection technology and a comfortable fit, this helmet keeps your head secure as you conquer the slopes.', img:'https://i.imgur.com/VsELX8C.jpg' },
    { name: 'Sandbox Classic 2.0 Snow Helment', price: 119.96, description: 'Safety first! Our reliable helmet is a must-have for any snowboarding enthusiast. Featuring advanced protection technology and a comfortable fit, this helmet keeps your head secure as you conquer the slopes.', img:'https://i.imgur.com/VsELX8C.jpg' },
    { name: 'Burton Brain Bucket', price: 325, description: 'Safety first! Our reliable helmet is a must-have for any snowboarding enthusiast. Featuring advanced protection technology and a comfortable fit, this helmet keeps your head secure as you conquer the slopes.', img:'https://i.imgur.com/VsELX8C.jpg' },
  ]);


  process.exit();
})();
