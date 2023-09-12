import React from "react";
import { Link } from "react-router-dom";
import ProductDetailsPage from "../../pages/ProductDetailsPage/ProductDetailsPage";
import "./ProductListItem.css";

export default function ProductListItem({ productItem, isPaid,handleAddToCart, user }) {

<ProductDetailsPage handleAddToCart={handleAddToCart} />
    return (
<div className="product-card-container">
    <div className="product-card">
      <Link to={`/product/${productItem._id}`} className="card-link">
        <div className="product-card-body">
          <img src={productItem.img} alt={productItem.name} className="product-img" />
          <h4 className="product-name">{productItem.name}</h4>
          <p className="product-price">${productItem.price}</p>
        </div>
      </Link>
      <div className="product-card-footer">
        {user && (
            <button
            className="btn btn-primary btn-lg"
            onClick={() => handleAddToCart(productItem._id)}
            >
            Add To Cart
          </button>
        )}
      </div>
    </div>
</div>
  );
}
