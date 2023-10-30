import React, { useState } from "react";
import ProductListItem from "../ProductListItem/ProductListItem";
import "./ProductList.css";
import ProductFilter from "../ProductFilter/ProductFilter";

export default function ProductList({ productItems, handleAddToCart, user, isPaid }) {
    const [filters, setFilters] = useState({
        price: null, // Set a default value
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
        } else {
          updatedFilters[filterType] = [value];
        }
              setFilters(updatedFilters);
      };
      
      

      const filteredProducts = productItems.filter((product) => {
        const { price, brand, rating, category } = filters;
        console.log(price)
      
        if (price === "0-100" && product.price >= 0 && product.price <= 100) {
            return true;
        } else if (price === "101-200" && product.price > 100 && product.price <= 200) {
            return true;
        } else if (price === "201-300" && product.price > 200 && product.price <= 300) {
            return true;
        } else if (price === "301-400" && product.price > 300 && product.price <= 400) {
            return true;
        } else if (price === "400+" && product.price > 400) {
            return true;
        }
      
        // Continue to apply filters for brand, rating, and category as before
      
        return (
          (brand.length === 0 || brand.includes(product.brand)) &&
          (rating.length === 0 || rating.includes(product.rating)) &&
          (category.length === 0 || category.includes(product.cat))
        );
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

