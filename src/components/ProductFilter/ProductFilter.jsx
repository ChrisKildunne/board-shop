import React, { useState } from "react";
import './ProductFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function ProductFilter({ handleFilter }) {
  const [priceVisible, setPriceVisible] = useState(true);
  const [categoryVisible, setCategoryVisible] = useState(true);

  const togglePrice = () => {
    setPriceVisible(!priceVisible);
  };

  const toggleCategory = () => {
    setCategoryVisible(!categoryVisible);
  };

  return (
    <div className="filter-options">
      <div onClick={togglePrice}>
      <label>Price Range <FontAwesomeIcon icon={faAngleDown} /></label>      </div>
      {priceVisible && (
        <>
          <div>
            <input
              type="checkbox"
              id="0-100"
              onChange={() => handleFilter("price", "0-100")}
            />
            <label htmlFor="0-100">$0 - $100</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="101-200"
              onChange={() => handleFilter("price", "101-200")}
            />
            <label htmlFor="101-200">$101 - $200</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="201-300"
              onChange={() => handleFilter("price", "201-300")}
            />
            <label htmlFor="201-300">$201 - $300</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="301-400"
              onChange={() => handleFilter("price", "301-400")}
            />
            <label htmlFor="301-400">$301 - $400</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="400+"
              onChange={() => handleFilter("price", "400+")}
            />
            <label htmlFor="400+">$400+</label>
          </div>
        </>
      )}
      <div onClick={toggleCategory}>
        <label>Category <FontAwesomeIcon icon={faAngleDown} /></label>
      </div>
      {categoryVisible && (
        <>
          <div>
            <input
              type="checkbox"
              id="Snowboard"
              onChange={() => handleFilter("category", "Snowboard")}
            />
            <label htmlFor="Snowboard">Snowboard</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Goggles"
              onChange={() => handleFilter("category", "Goggles")}
            />
            <label htmlFor="Goggles">Goggles</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Helmet"
              onChange={() => handleFilter("category", "Helmet")}
            />
            <label htmlFor="Helmet">Helmet</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Bindings"
              onChange={() => handleFilter("category", "Bindings")}
            />
            <label htmlFor="Bindings">Bindings</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Boots"
              onChange={() => handleFilter("category", "Boots")}
            />
            <label htmlFor="Boots">Boots</label>
          </div>
        </>
      )}
    </div>
  );
}
