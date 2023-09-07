import React, { useState, useEffect } from "react";
import * as reviewsAPI from '../../utilities/reviews-api';
//import review from "../../../models/review";

export default function ReviewForm({productId}) {
  const [newReview, setNewReview] = useState(""); 
  const [rating, setRating] = useState(0)
  const [reviews, setReviews] = useState([]); 
  const [showEdit, setShowEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(false)


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

  const handleAddReview = (evt) => {
    evt.preventDefault();
    if (!showEdit) {
      addReview(newReview);
    } else {
      saveReview();
    }
  }


  const deleteReview = async (idx, reviewId, productId) => {
    await reviewsAPI.deleteReview(productId, reviewId)
    reviews.splice(idx,1)
    setReviews([...reviews])
  }
  const handleDelete = async (idx, reviewId, productId) => {
    deleteReview(idx,reviewId,productId)
  }
  const editReview = (idx) => {
    setNewReview(reviews[idx].text);
    setRating(reviews[idx].rating);
    setShowEdit(true);
    setEditIndex(idx);
  }

  const saveReview = async () => {
      const reviewId = reviews[editIndex]._id
      const updatedReview = await reviewsAPI.editReview(productId, reviewId, newReview, rating);
      const updatedReviews = [...reviews];
      updatedReviews[editIndex] = updatedReview
      setReviews(updatedReviews)
      setShowEdit(false);
      setEditIndex(null)
      setNewReview("")
      setRating(0)
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
        { !showEdit ? 
        <button type="submit">Add Review</button>
        :
        <button type="submit" onClick={saveReview}>Edit Review</button>
        }
      </form>
      <h3>Reviews:</h3>
        <table>
          <tbody>
            {reviews.map((review, idx) => (
            <tr key={idx}>
              <td>{review.text}</td>
              <td>{review.rating}</td>
              <td><button onClick={()=>editReview(idx)}>Edit</button></td>
              <td><button onClick={()=>handleDelete(idx, review._id, productId)}>Delete</button></td>
            </tr>
              ))}
            </tbody>
        </table>
    </>
  );
}
