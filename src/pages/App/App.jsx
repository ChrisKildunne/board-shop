import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
    { user ?
    <>
      <NavBar user={ user } setUser={ setUser }/>
      <Routes>
          <Route path="/orders/new" element={<ProductsPage />} />
          <Route path="/orders" element={ <OrderHistoryPage /> } />
          <Route path="/orders/cart" element={ <OrderDetail /> } />
      </Routes>
      </>
    :
    <AuthPage setUser={ setUser }  />
    }
    </main>
  );
}


