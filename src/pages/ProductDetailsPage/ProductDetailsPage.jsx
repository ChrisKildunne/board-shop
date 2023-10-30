import {  useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import * as productsAPI from '../../utilities/products-api';

export default function ProductDetailsPage({user, handleAddToCart}) {
  const { productId } = useParams();
  const [productItem, setProductItem] = useState(null)

  useEffect(() => {
    async function getProductDetails() {
        const product = await productsAPI.getProductById(productId);
        setProductItem(product);
        console.log(productItem)
    }
      getProductDetails();
  }, [productId]);
  
  
  return (
    <div className='container mt-4'>
      {productItem ? (
        <>
          <h1 className="display-4">{productItem.name} Details</h1>
          <p className='lead'>${productItem.price}</p> 
          <p>{productItem.description}</p>
        </>
      ) : (
        <h1>Error</h1>
      )}
      <ReviewForm productId={productId} user={user} />
    </div>
  );
}