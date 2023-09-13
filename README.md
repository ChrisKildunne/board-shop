# Board Shop

Developed by Chris Kildunne


## Description

Welcome to Board Shop, your one-stop destination for all things related to boards. Whether you're a skateboarder, surfer, or snowboarder, we've got you covered. Explore our wide range of boards and accessories to fuel your passion for riding the waves or streets.

## Key Features
- A user can add products to their shopping cart
- A user can then checkout using Stripe
- A user can then navigate to the order history page to see any of their past orders
- A user can navigate to the product details page from either the search bar or the products page. From their they can see product reviews. If logged in, a user can then leaver a review, edit their review or delete their review

## Screenshots

![Screenshot 2023-09-13 at 7 52 58 AM](https://github.com/ChrisKildunne/board-shop/assets/136514462/f847ed3b-c043-4697-a0d4-6c7a813bf3f3)

![Screenshot 2023-09-13 at 7 53 30 AM](https://github.com/ChrisKildunne/board-shop/assets/136514462/e1855b97-0751-40e1-bb50-4bafb512d5ef)

![Screenshot 2023-09-13 at 7 53 59 AM](https://github.com/ChrisKildunne/board-shop/assets/136514462/d1a4cd2a-3090-4a75-8e29-92a65a4dc6db)

![Screenshot 2023-09-13 at 7 53 42 AM](https://github.com/ChrisKildunne/board-shop/assets/136514462/91e4ce5b-0ecb-4744-9535-4fce2b27854e)


## Technologies Used

- React
- Node.js
- Express.js
- MongoDB
- Stripe 
- Bootstrap

## Using Stripe
- Install stripe using npm install --save @stripe/react-stripe-js @stripe/stripe-js
- Store API key in .env file.
- Stripe is currently in test-mode on this application so a user must use stripes test card: 
        - Card #: 4242 4242 4242 4242
        - Exp Date: 12/34
        - CVC: Any 3 digits
        - Zip: Any 5 digits

## Getting Started

To get started with Board Shop, follow these steps:
- [Trello](https://trello.com/b/L84sXud6/project-4)
- [Board Shop](https://board-shop-81f8a4bd2226.herokuapp.com/)

# Next Steps
- Enable an admin to create, delete and edit products from the products page
- Optimize app design for mobile users
- Tie application into specific products on stripe side to take full advantage of stripe features i.e. emailed reciepts, refunds etc...
- Utilized google maps api for shipping details


