export default function LineItem({ lineItem, isPaid, handleChangeQty }){
    return (
    <ul>
    {!isPaid &&
        <button onClick = {() => handleChangeQty(lineItem.product._id,lineItem.qty + 1)}>+</button>
    }
    <ul>{lineItem.product.name}---{lineItem.qty}</ul>
    {!isPaid &&
        <button onClick = {() => handleChangeQty(lineItem.product._id,lineItem.qty - 1)}>-</button>
    }
    </ul>
    )
}