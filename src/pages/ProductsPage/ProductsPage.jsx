import React, { useState, useEffect } from "react";
import * as productsAPI from "../../utilities/products-api";
import * as ordersAPI from "../../utilities/orders-api";
import { useNavigate } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";


export default function ProductsPage({ user, setUser }) {
  const [productItems, setProductItems] = useState([]);
  const [cart, setCart] = useState(null);
  const [addedToCart, setAddedToCart ] = useState("")
  const navigate = useNavigate();

  useEffect(function () {
    async function getProducts() {
      const products = await productsAPI.getAll();
      setProductItems(products);
    }
    getProducts();
    if (user) {
      async function getCart() {
        const cart = await ordersAPI.getCart();
        setCart(cart);
      }
      getCart();
    }
  }, [user]);

  /*---- Event Handlers ----*/
  async function handleAddToCart(productId) {
    const updatedCart = await ordersAPI.addProductToCart(productId);
    setCart(updatedCart);
    setAddedToCart("Added +1 to Cart")
    setTimeout(()=>{
      setAddedToCart("");
    }, 2000);
  }
  
  return (
    <>
      <h1>Welcome To the Board Shop!</h1>
      <h2>Products:</h2>
      {addedToCart }
      <ProductList productItems={productItems} handleAddToCart={handleAddToCart} user={user} />
    </>
  );
}