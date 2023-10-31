import React from "react";
import { Link } from "react-router-dom";
import ProductDetailsPage from "../../pages/ProductDetailsPage/ProductDetailsPage";
import ProductFilter from "../ProductFilter/ProductFilter";
import "./ProductListItem.css";

export default function ProductListItem({ productItem, isPaid, handleAddToCart, user }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 product-card-row">
    <div className="card">
      <div className="card">
        <img src={productItem.img} alt={productItem.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{productItem.name}</h5>
          <p className="card-text">${productItem.price}</p>
          <div className="product-card-footer">
            {user && (
              <button
                className="btn btn-primary btn-lg"
                onClick={() => handleAddToCart(productItem._id)}
              >
                Add To Cart
              </button>
            )}
            <Link to={`/product/${productItem._id}`} className="card-link">
              <button className="btn btn-secondary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}
