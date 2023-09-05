export default function LineItem({ lineItem, isPaid }){
    return (
    <>
    {!isPaid &&
        <button onClick = {() => alert('clicked')}>+</button>
    }
    <span>{lineItem.qty}</span>
    {!isPaid &&
        <button onClick = {() => alert('clicked')}>-</button>
    }
    </>
    )
}