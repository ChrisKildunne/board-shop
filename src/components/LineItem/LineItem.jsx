import "./LineItem.css"

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
    return (
        <div className="Container">
        {!isPaid && (
          <div className="Cart">
            <button onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty - 1)}>-</button>
            <tr>{lineItem.product.name}</tr>
            <tr>{lineItem.qty}</tr>
            <tr>${lineItem.product.price}</tr>
            <button onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty + 1)}>+</button>
          </div>
        )}
      </div>
    );
  }
  