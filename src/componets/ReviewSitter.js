import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { selectError, selectLoading } from "../store/bookings/selectors";
//import { setReviews } from "../store/reviews/slice";
import { createReviews } from "../store/reviews/thunks";

const ReviewSitter = () => {

    const { bookingId } = useParams();
     const api = useApi();
     const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading)
     const error = useSelector(selectError)
    const [review, setReviews] = useState({
     booking_id: bookingId,
    score: 0,
     message: "",
  
  });
   const handleInputChange = (event) => {
    setReviews({ ...review, [event.target.name]: event.target.value });
  };
  
    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReviews( review, api))
      .then((response) => {
        toast.success('Review created sucessfully!');
        setReviews({
           booking_id: bookingId,
            score: 0,
             message: "",
           
         });

      })
    .catch((error) => {
      console.error('Error while review:', error);
      toast.error('review failed. Please try again.');
    });
  };
  
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Review</h2>
      {error && <div className="text-red-500 mb-4"></div>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          message
          <input
            type="text"
           value={review.message} 
           onChange={handleInputChange} 
            name="message"
           placeholder="Enter your review message"
           className="w-full p-2 border rounded"
        />
        </label>
          <label className="block mb-4">
          Score:
          <input
            type="number"
            value={review.score}
            onChange={handleInputChange}
            name="score"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </label>
         <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
          disabled={isLoading} // Disable the button when loading
        >
          {isLoading ? 'Submitting...' : 'Submit Review'}
        </button> 
        {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4">
          Submit Review
        </button> */}
      </form>
    </div>
  );
};
export default ReviewSitter;