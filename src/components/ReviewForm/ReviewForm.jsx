import React, { useState, useEffect } from "react";
import * as reviewsAPI from '../../utilities/reviews-api';
import './ReviewForm.css'
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
            <button className="btn btn-primary btn-lg" type="submit">Add Review</button>
            :
            <button className="btn btn-primary btn-lg" type="submit" onClick={saveReview}>Edit Review</button>
            }
          </form>
       </>
      )}
      <h3>Reviews:</h3>
        <table className="table table-striped">
          <thead>
            {/* <tr>
              <th>Review</th>
              <th>Rating</th>
              <th>User</th>
              <th>Edit/Delete</th>
            </tr> */}
          </thead>
          <tbody>
            {reviews.sort((a ,b ) => new Date(b.createdAt) - new Date(a.createdAt)).map((review, idx) => (
            <tr key={idx}>
              <td>{review.text}</td>
              <td>{review.rating}</td>
              <td>{ review.user.name }</td>
                { user && user.name === review.user.name && (
                  <>
                    <td><button className="btn btn-primary btn-lg" onClick={()=>editReview(idx)}>Edit</button></td>
                    <td><button className="btn btn-danger" onClick={()=>handleDelete(idx, review._id, productId)}>Delete</button></td>
                  </>
                )}
            </tr>
              ))}
            </tbody>
        </table>
    </>
  );
}
