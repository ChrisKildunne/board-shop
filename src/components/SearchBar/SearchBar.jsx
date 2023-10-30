import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as productsAPI from '../../utilities/products-api';
import './SearchBar.css'; // Import your CSS file for styling

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const productList = await productsAPI.getAll();
      setProducts(productList);
    };
    getProducts();
  }, []);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const product = products.find((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (product) {
      setSearchInput('');
      navigate(`/product/${product._id}`);
    } else {
      console.log(product);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
