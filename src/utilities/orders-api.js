import sendRequest from "./send-request";

const BASE_URL = '/api/orders';

export function getCart(){
    return sendRequest(`${BASE_URL}/cart`)
}

export function addProductToCart(productId){
    return sendRequest(`${BASE_URL}/cart/products/${productId}`, 'POST')
}


export function setProductQtyInCart(productId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { productId, newQty})
}

export function checkout() {
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST'); 
  }
  
  export function allPastOrders(userId){
    return sendRequest(`${BASE_URL}/user/${userId}/orders`, 'GET')
}
export function createPaymentIntent(userId) {
    return fetch(`${BASE_URL}/createPaymentIntent/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response;
    });
  }
  