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
    <>
      <h1>OrderHistory</h1>
      {pastOrders.map((order) => (
        <div key={order._id}>
          <h2>Order ID: {order.orderId}</h2>
          <p>Order Date: {order.createdAt}</p>
        </div>
      ))}
    </>
  );
}
