import sendRequest from './send-request';
const BASE_URL = '/api/products';


export async function getAll(){
    return sendRequest(`${BASE_URL}`)
}

export async function getProductById(id) {
    return sendRequest(`${BASE_URL}/${id}`); 
  }
  
//   export async function getReviewsForProduct(productId) {
//     return sendRequest(`${BASE_URL}/${productId}/reviews`);
//   }

//   export async function addNew(productId,review){
//     const payload = {text : review }
//     return sendRequest(`${BASE_URL}/${productId}/reviews`, 'POST', payload)
// }