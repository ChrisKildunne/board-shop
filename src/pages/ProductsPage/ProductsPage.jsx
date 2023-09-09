import React, { useState, useEffect } from "react";
import * as productsAPI from "../../utilities/products-api";
import * as ordersAPI from "../../utilities/orders-api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";

export default function ProductsPage({ user, setUser }) {
  const [productItems, setProductItems] = useState([]);
  const [cart, setCart] = useState(null);
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
  }

  return (
    <>
      <h1>Products:</h1>
      <ProductList productItems={productItems} handleAddToCart={handleAddToCart} user={user} />
    </>
  );
}
