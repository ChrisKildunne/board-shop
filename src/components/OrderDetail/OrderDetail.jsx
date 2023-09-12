import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ order, handleChangeQty, handleCheckout}) {
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
      <h1 className= "mt-4">Order Details</h1>
          <span>{order.orderId}</span>
           <h2 className="mt-4">Cart:</h2>
           {lineItems}
           <div className="d-flex justify-content-between align-items-center mt-4">
            <span>
              {order.totalQty} --- ${order.orderTotal.toFixed(2)}
            </span>
            <button className="btn btn-primary" onClick={handleCheckout} disabled={order.lineItems.length===0}>
              CHECKOUT
            </button>
          </div>
      </>
        )
    }