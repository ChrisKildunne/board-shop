import { Link } from "react-router-dom"
import ProductDetailsPage from "../../pages/ProductDetailsPage/ProductDetailsPage";

export default function ProductListItem( { productItem, handleAddToCart, user }) {
<ProductDetailsPage productItem={productItem} />
console.log("user prop:", user);

    return (
        <div className="ProductListItem">
            <div className="name"><Link to={`/product/${productItem._id}`}>{productItem.name}</Link></div>
            <div>
            {user && (
                <button onClick={() => handleAddToCart(productItem._id)}>Add To Cart</button>
                )}
            </div>
           
        </div>
    )
}