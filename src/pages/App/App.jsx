import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  // useEffect(() => {
  //   async function getProducts(){
  //     const product = await ProductsAPI.getAll();
  //   }
  // })

  return (
    <main className="App">
    { user ?
    <>
      <NavBar user={ user } setUser={ setUser }/>
      <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path='/orders' element={ <OrderHistoryPage /> } />
      </Routes>
      </>
    :
    <AuthPage setUser={ setUser }  />
    }
    </main>
  );
}


