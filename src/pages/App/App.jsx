import  { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ProductDetailsPage from '../ProductDetailsPage/ProductDetailsPage';
import CartPage from '../CartPage/CartPage';
import NavBar from '../../components/NavBar/NavBar';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import SearchBar from "../../components/SearchBar/SearchBar";
import { getUser } from '../../utilities/users-service';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../index.css";
import "./App.css";

export default function App() {
  const stripePromise = loadStripe(
    'pk_test_51No6rMEVc2xdoRcSmeja37cmqYVHdk2tQrztDcxyFF5HkLzdC7TZYZY4LhoiLDCC3jfTxbkqcN9mDBvKJwywHMED000DnPYeKD'
  );
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate(); 

  useEffect(() => {
    
    navigate('/orders/new'); 
  }, []);
    const options = {
      clientSecret: '{{CLIENT_SECRET}}',
    };

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <SearchBar/>
      <Routes>
        <Route path="/orders/new" element={<ProductsPage user={user} />} />
        <Route path="/orders/:userId" element={<OrderHistoryPage user={user} />} />
        <Route path="/product/:productId" element={<ProductDetailsPage user={user} />} />
        <Route path="/orders/cart" element={<CartPage user={user} />} />
        <Route path="/orders/checkout" element={<Elements stripe={stripePromise}><CheckoutForm user ={user} /></Elements>} />
      {!user && <Route path="/auth" element={<AuthPage setUser={setUser} />} />}
      </Routes>
    </main>
  );
}
