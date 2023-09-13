import  { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import * as productsAPI from "../../utilities/products-api";

export default function SearchBar(){
    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect (() => {
        const getProducts = async () => {
            const productList = await productsAPI.getAll()
            setProducts(productList)
        }
        getProducts()
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
    const handleSearch = () => {
        const product = products.find((product) => product.name.toLowerCase().includes(searchInput.toLocaleLowerCase()))
        if(product){
            navigate(`/product/${product._id}`)
        }else{
            console.log(product)
        }
    }
    return (
        <div>
          <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
          />
        <button className='btn btn-primary' onClick={handleSearch}>Search</button>
      </div>
      );
    }
    
    
    
    
    
    