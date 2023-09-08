import { Link } from "react-router-dom"
import ProductDetailsPage from "../../pages/ProductDetailsPage/ProductDetailsPage";
import './ProductListItem.css';

export default function ProductListItem( { productItem, handleAddToCart, user }) {
<ProductDetailsPage productItem={productItem} />

return (
    <div className="ProductListItem">
        <Link to={`/product/${productItem._id}`}>
            <div className="name">
            {productItem.name}
            </div>
            <span>${productItem.price}</span>
        </Link>
    <div>
        {user && (
        <button onClick={() => handleAddToCart(productItem._id)}>Add To Cart</button>
        )}
    </div>
    </div>

  )  
}