import React, { useState } from "react";
import ProductListItem from "../ProductListItem/ProductListItem";
import "./ProductList.css";
import ProductFilter from "../ProductFilter/ProductFilter";

export default function ProductList({ addedToCart, productItems, handleAddToCart, user, isPaid }) {
  const [filters, setFilters] = useState({
    price: [], 
    brand: [],
    rating: [],
    category: [],
  });

  const handleFilter = (filterType, value) => {
    const updatedFilters = { ...filters };

    if (filterType === 'category') {
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter((cat) => cat !== value);
      } else {
        updatedFilters[filterType].push(value);
      }
    } else if (filterType === 'price') {
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter((range) => range !== value);
      } else {
        updatedFilters[filterType].push(value);
      }
    }

    setFilters(updatedFilters);
  };

  const filteredProducts = productItems.filter((product) => {
    const { price, brand, rating, category } = filters;

    if (price.length === 0) {
      return (
        (brand.length === 0 || brand.includes(product.brand)) &&
        (rating.length === 0 || rating.includes(product.rating)) &&
        (category.length === 0 || category.includes(product.cat))
      );
    } else {
      // Filter products based on selected price ranges
      return price.some((selectedRange) => {
        const [minPrice, maxPrice] = selectedRange.split('-').map(Number);
        return product.price >= minPrice && product.price <= maxPrice;
      }) &&
        (brand.length === 0 || brand.includes(product.brand)) &&
        (rating.length === 0 || rating.includes(product.rating)) &&
        (category.length === 0 || category.includes(product.cat));
    }
  });

  const products = filteredProducts.map((product) => (
    <ProductListItem
      key={product._id}
      productItem={product}
      handleAddToCart={handleAddToCart}
      user={user}
      
    />
  ));

  return (
    <div className="page-container">
      <div className="filter-container">
        <ProductFilter handleFilter={handleFilter} />
      </div>
      <div className="ProductList">
        <div className="row">
          {products}
        </div>
      </div>
    </div>
  );
  
}
