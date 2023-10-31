import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import * as ordersAPI from "../../utilities/orders-api";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import './CartPage'

export default function CartPage({ user }) {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    async function getCart() {
      const cartData = await ordersAPI.getCart();
      setCart(cartData);
    }

    if (user) {
      getCart();
    }
  }, [user]);

  /*---- Event Handlers ----*/
  async function handleChangeQty(productId, newQty) {
    const updatedCart = await ordersAPI.setProductQtyInCart(productId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout(user) {
        navigate(`/orders/checkout`)
  }

    return (
      <div className="cart-page-container">
        {cart ? (
          <OrderDetail order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    );
  }