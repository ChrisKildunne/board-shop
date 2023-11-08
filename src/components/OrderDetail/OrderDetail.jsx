import LineItem from '../LineItem/LineItem';
import './OrderDetail.css'; 

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineItems = order.lineItems.map((item) => (
    <div className='line-item' key={item._id}>
      <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
      />
    </div>
  ));

  return (
    <div className="order-detail-container">
      <h1 className="order-detail-heading">Order Details</h1>
      <span>{order.orderId}</span>
      <h2 className="order-detail-subheading">Cart:</h2>
      {lineItems}
      <div className="order-summary">
        <span>
          {order.totalQty} - ${order.orderTotal.toFixed(2)}
        </span>
        <button
          className="btn btn-primary checkout-button"
          onClick={handleCheckout}
          disabled={order.lineItems.length === 0}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
