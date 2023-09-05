import { useState, useEffect } from "react";
import * as productsAPI from '../../utilities/products-api';
import { Link } from "react-router-dom"
import ProductList from '../../components/ProductList/ProductList';

export default function ProductsPage() {
  const [productItems, setProductItems] = useState([])
  const [cart, setCart] = useState(null)

  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();
      console.log(products)
      setProductItems(products);
    }
    getProducts();

    async function getCart(){
      const cart = await ordersApi.getCart();
      setCart(cart)
    }
    getCart();
  }, []);

  // const productList = products.map((product) => (
  //   <div key = {product.id}><Link to={`/product/${product.id}`}>{product.name}---${product.price}---{product.description}</Link></div>
  // ))


  return (
    <>
    <h1>Products:</h1>
    <ProductList productItems={productItems} />
    </>
    
  );
}
