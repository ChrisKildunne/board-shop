import sendRequest from './send-request';
const BASE_URL = '/api/reviews';

export async function getAll(productId) {
  //console.log("this is the product id",productId)
  return sendRequest(`${BASE_URL}/${productId}`);
}

export async function addNew(productId,reviewText, rating, reviewId){
    const payload = {text : reviewText, rating: rating, reviewId: reviewId }
    return sendRequest(`${BASE_URL}/${productId}`, 'POST', payload)
}

export async function deleteReview(productId, reviewId){
  return sendRequest(`${BASE_URL}/${productId}/${reviewId}`, 'DELETE')
}


export async function editReview(productId, reviewId, updatedText, updatedRating){
  const payload = {text : updatedText, rating: updatedRating }
  return sendRequest(`${BASE_URL}/${productId}/${reviewId}`, 'PUT', payload)
}