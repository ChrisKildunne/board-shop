import React, { useState, useEffect } from "react";
import * as reviewsAPI from '../../utilities/reviews-api';


export default function ReviewForm({productId}) {
  const [newReview, setNewReview] = useState(""); 
  const [rating, setRating] = useState(0)
  const [reviews, setReviews] = useState([]); 

  useEffect(() => {
    async function getReviews() {
      const reviewData= await reviewsAPI.getAll(productId);
      setReviews(reviewData);
    }
    getReviews(); 
  }, []);

  const addReview = async (reviewText) => {
    const newReviewData = await reviewsAPI.addNew(productId, reviewText, rating);
    setReviews([...reviews, newReviewData]);
    setNewReview(""); 
    setRating(0)
  }

  function handleAddReview(evt) {
    evt.preventDefault();
      addReview(newReview);
  }

  return (
    <>
      <h3>Add a Review</h3>
      <form onSubmit={handleAddReview}>
        <input
          value={newReview}
          onChange={(evt) => setNewReview(evt.target.value)} 
          placeholder="Add Review Here"
        />
        <select value={rating} onChange={(evt) => setRating(evt.target.value)}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type="submit">Add Review</button>
      </form>
      <div>
        <h3>Reviews:</h3>
        <ul>
          {reviews.map((review, idx) => (
            <li key={idx}>{review.text}---{review.rating}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
