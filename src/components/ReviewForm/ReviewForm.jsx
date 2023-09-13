import React, { useState, useEffect } from "react";
import * as reviewsAPI from '../../utilities/reviews-api';
import './ReviewForm.css'
import { FaEdit, FaTrash } from 'react-icons/fa';
//import review from "../../../models/review";

export default function ReviewForm({productId, user}) {
  const [newReview, setNewReview] = useState(""); 
  const [rating, setRating] = useState(0)
  const [reviews, setReviews] = useState([]); 
  const [showEdit, setShowEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(false)


  useEffect(() => {
    async function getReviews() {
      const reviewData= await reviewsAPI.getAll(productId);
      console.log(reviewData)
      setReviews(reviewData);
    }
      getReviews(); 
  }, []);

  const addReview = async (reviewText) => {
    const newReviewData = await reviewsAPI.addNew(productId, reviewText, rating);
    setReviews(newReviewData);
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
      const reviewList = [...reviews];
      reviewList[editIndex] = updatedReview
      setReviews(updatedReview)
      setShowEdit(false);
      setEditIndex(null)
      setNewReview("")
      setRating(0)
    }
  

  return (
    <>
      {user && (
        <>
          <h3>Add a Review</h3>
          <form onSubmit={handleAddReview}>
            <div className = "mb-3">
              <input
                className="reviewInput"
                value={newReview}
                onChange={(evt) => setNewReview(evt.target.value)} 
                placeholder="Add Review Here"
                />
              <span>Selected Rating: {rating}</span>
            <select className="form-select" value={rating} onChange={(evt) => setRating(evt.target.value)}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
             </div>
            { !showEdit ? 
            <button className="btn btn-primary btn-lg" type="submit" disabled={newReview===""}>Add Review</button>
            :
            <button className="btn btn-primary btn-lg" type="submit" onClick={saveReview} disabled={newReview===""}>Edit Review</button>
            }
          </form>
       </>
      )}
      <h3>Reviews:</h3>
      <div className="card-deck">
        {reviews
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((review, idx) => (
            <div className="card" key={idx}>
              <div className="card-body">
                <h5 className="card-title">{review.user.name}</h5>
                <p className="card-text">{review.text}</p>
                <p className="card-text">Rating: {review.rating} / 5</p>
                {user && user.name === review.user.name && (
                  <div className="btn-group">
                    <button className="btn btn-primary" onClick={() => editReview(idx)}>
                      <FaEdit /> 
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(idx, review._id, productId)}>
                      <FaTrash /> 
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}