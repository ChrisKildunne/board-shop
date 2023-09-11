import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ProductDetailsPage from '../ProductDetailsPage/ProductDetailsPage';
import CartPage from '../CartPage/CartPage';
import NavBar from '../../components/NavBar/NavBar';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { getUser } from '../../utilities/users-service';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export default function App() {
  const stripePromise = loadStripe(
    'pk_test_51No6rMEVc2xdoRcSmeja37cmqYVHdk2tQrztDcxyFF5HkLzdC7TZYZY4LhoiLDCC3jfTxbkqcN9mDBvKJwywHMED000DnPYeKD'
  );
  const [user, setUser] = useState(getUser());
    const options = {
      clientSecret: '{{CLIENT_SECRET}}',
    };

  return (
    <main className="App">
      <h1>Welcome To the Board Shop</h1>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/orders/new" element={<ProductsPage user={user} />} />
        <Route path="/orders/:userId" element={<OrderHistoryPage user={user} />} />
        <Route path="/product/:productId" element={<ProductDetailsPage user={user} />} />
        <Route path="/orders/cart" element={<CartPage user={user} />} />
        <Route path="/orders/checkout" element={<Elements stripe={stripePromise}><CheckoutForm user ={user}/></Elements>} />
      </Routes>
      {!user && <AuthPage setUser={setUser} />}
    

    </main>
  );
}
