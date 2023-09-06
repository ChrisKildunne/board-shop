
export default function ProductListItem( { productItem, handleAddToCart }) {


    return (
        <div className="ProductListItem">
            <div className="name">{productItem.name}</div>
            <div>
                <button onClick={() => handleAddToCart(productItem._id)}>Add To Cart</button>
            </div>
           
        </div>
    )
}