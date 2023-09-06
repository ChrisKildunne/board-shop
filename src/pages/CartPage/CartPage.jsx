
import React from 'react';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function CartPage({order, handleChangeQty}) {
    console.log(order)
  return (
    <div>
      {order !== null ? (
    <OrderDetail order={order} handleChangeQty={handleChangeQty} />
  ) : (
    <p>No Cart Yet</p>
  )}    </div>
  );
}
