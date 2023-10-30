import React from "react";
import { Link } from "react-router-dom";
import ProductDetailsPage from "../../pages/ProductDetailsPage/ProductDetailsPage";

import "./ProductListItem.css";

export default function ProductListItem({ productItem, isPaid, handleAddToCart, user }) {
  <ProductDetailsPage handleAddToCart={handleAddToCart} />
    return (
      <div className="product-card-row">
        <div className="bbb_deals">
          <div className="ribbon ribbon-top-right"></div>
          <div className="bbb_deals_slider_container">
            <div className="bbb_deals_item">
              <div className="bbb_deals_image">
                <img src={productItem.img} alt={productItem.name} className="img-style" />
              </div>
              <div className="bbb_deals_content">
                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                  {/* Add product category here */}
                </div>
                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                <div className="bbb_deals_item_name">{productItem.name}</div>
              </div>
              <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                <div className="bbb_deals_item_price">${productItem.price}</div>
              </div>
                {/* <div className="available">
                  <div className="sold_stars ml-auto">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div> */}
              </div>
              <div className="product-card-footer">
                {user && (
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => handleAddToCart(productItem._id)}
                  >
                    Add To Cart
                  </button>
                )}
                <button className="details-button">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  