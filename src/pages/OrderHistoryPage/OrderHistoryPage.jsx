import { useState, useEffect } from 'react'
import * as ordersAPI from '../../utilities/orders-api'


export default function OrderHistoryPage( {user} ) {
  const [pastOrders, setPastOrders] = useState([])
  useEffect(() => {
    async function getPastOrders(){
      setPastOrders(await ordersAPI.allPastOrders(user._id))
      console.log(user._id)
    }
    getPastOrders()
  }, [])

  return (
    <div className="container">
      <h1 >Order History</h1>
      {pastOrders
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((order) => (
          <div className="card mb-3" key={order._id}>
            <div className="card-body">
              <h5 className="card-title">Order ID: {order.orderId}</h5>
              <p className="card-text">Order Total: ${order.orderTotal.toFixed(2)}</p>
              <p className="card-text">
                Order Date: {new Date(order.createdAt).toLocaleString()}
              </p>
              {order.lineItems.map((item) => (
                <div className="card-text" key={item._id}>
                  <p>Product Name: {item.product.name}-${item.product.price.toFixed(2)}</p>
                  <p>Quantity: {item.qty}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}