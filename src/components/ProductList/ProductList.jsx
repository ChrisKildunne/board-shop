import React, { useState } from "react";
import ProductListItem from "../ProductListItem/ProductListItem";
import "./ProductList.css";
import ProductFilter from "../ProductFilter/ProductFilter";

export default function ProductList({ productItems, handleAddToCart, user, isPaid }) {
    const [filters, setFilters] = useState({
        price: [],
        brand: [],
        rating: [],
        category: [],
    });
    const handleFilter = (filterType, values) => {
        // Create a copy of the current filters state
        const updatedFilters = { ...filters };
        
        // Update the filter based on the filter type
        updatedFilters[filterType] = values;
      
        // Set the updated filters as the new state
        setFilters(updatedFilters);
      };
      

    const filteredProducts = productItems.filter((product) => {
        const { price, brand, rating, category } = filters;
        return (
            (price.length === 0 || price.includes(product.priceCategory)) &&
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

