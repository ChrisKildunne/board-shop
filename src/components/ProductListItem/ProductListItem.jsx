import { Link } from "react-router-dom"
import ProductDetailsPage from "../../pages/ProductDetailsPage/ProductDetailsPage";
import './ProductListItem.css';

export default function ProductListItem( { productItem, handleAddToCart, user }) {
<ProductDetailsPage productItem={productItem} />

return (
    <div className="card">
        <Link to={`/product/${productItem._id}`} className="card-link">
            <div className="card-body">
            <h4>{productItem.name}</h4>
            <p className="card-text">${productItem.price}</p>
            </div>
        </Link>
    <div className="card-footer">
        {user && (
        <button className="btn btn-primary btn-lg" onClick={() => handleAddToCart(productItem._id)}>Add To Cart</button>
        )}
    </div>
    </div>

  )  
}