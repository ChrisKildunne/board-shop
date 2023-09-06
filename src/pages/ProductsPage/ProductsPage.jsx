import { useState, useEffect } from "react";
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import { Link } from "react-router-dom"
import ProductList from '../../components/ProductList/ProductList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';


export default function ProductsPage({user, setUser}) {
  const [productItems, setProductItems] = useState([])
  const [cart, setCart] = useState(null)

  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();
      //console.log(products)
      setProductItems(products);
    }
    getProducts();

    async function getCart(){
      const cart = await ordersAPI.getCart();
      setCart(cart)
      console.log(cart)
    }
    getCart();
  }, []);

  /*---- Event Handlers ----*/
  async function handleAddToCart(productId){
    const updatedCart =  await  ordersAPI.addProductToCart(productId)
    setCart(updatedCart)
  }
 
  async function handleChangeQty(productId, newQty){
    const updatedCart =  await  ordersAPI.setProductQtyInCart(productId, newQty)
    setCart(updatedCart)
  }

  

  return (
    <>
    <h1>Products:</h1>
    <ProductList productItems={productItems} handleAddToCart={handleAddToCart} />
    {cart !== null ? (
        <OrderDetail order={cart} handleChangeQty={handleChangeQty} />
      ) : (
        <p>No Cart Yet</p>
      )}
    </>
    
  );
}
