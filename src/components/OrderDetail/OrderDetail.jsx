import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ order, handleChangeQty}) {
    if (!order) return null;
  
    const lineItems = order.lineItems.map(item =>
      <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}

      />
    );
    return (
        <>
   <h1>Order Details</h1>
   <span>{order.orderId}</span>
        <h2>Cart:</h2>
        {lineItems}
        </>
        )
    }