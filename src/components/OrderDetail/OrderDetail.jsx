import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ order }) {
    if (!order) return null;
  
    const lineItems = order.lineItems.map(item =>
      <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        key={item._id}
      />
    );
    return (
   <h1>Order Details</h1>
    )
    }