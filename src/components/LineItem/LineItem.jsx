import "./LineItem.css"

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
    return (
        <div className="Container">
        {!isPaid && (
          <div className="Cart">
            <button onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty - 1)}>-</button>
            <span>{lineItem.product.name}</span>
            <span>{lineItem.qty}</span>
            <span>${lineItem.product.price}</span>
            <button onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty + 1)}>+</button>
          </div>
        )}
      </div>
    );
  }
  