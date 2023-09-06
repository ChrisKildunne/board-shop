import sendRequest from './send-request';
const BASE_URL = '/api/reviews';

export async function getAll(productId) {
  //console.log("this is the product id",productId)
  return sendRequest(`${BASE_URL}/${productId}`);
}

export async function addNew(productId,reviewText, rating){
    const payload = {text : reviewText, rating: rating }
    return sendRequest(`${BASE_URL}/${productId}`, 'POST', payload)
}