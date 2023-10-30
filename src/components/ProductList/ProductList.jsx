import React, { useState } from "react";
import ProductListItem from "../ProductListItem/ProductListItem";
import "./ProductList.css";
import ProductFilter from "../ProductFilter/ProductFilter";

export default function ProductList({ productItems, handleAddToCart, user, isPaid }) {
  const [filters, setFilters] = useState({
    price: [], // Use an array to store selected price ranges
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
      // Toggle the selection of price ranges
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter((range) => range !== value);
      } else {
        updatedFilters[filterType].push(value);
      }
    }
    // Add a default case for unexpected filter types here if needed.

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
    <main className="ProductList">
      <ProductFilter filters={filters} handleFilter={handleFilter} />
      {products}
    </main>
  );
}
