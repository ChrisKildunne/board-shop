import "./LineItem.css"

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
    return (
        <div className="checkout-container">
        {!isPaid && (
          <div className="checkout-cart">
            <button className="btn btn-primary" onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty - 1)}>-</button>
            <span>{lineItem.product.name}</span>
            <span>{lineItem.qty}</span>
            <span>${lineItem.product.price}</span>
            <button className="btn btn-primary" onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty + 1)}>+</button>
          </div>
        )}
      </div>
    );
  }
  