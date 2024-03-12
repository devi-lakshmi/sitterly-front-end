import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { selectError, selectLoading } from "../store/reviews/selectors";
import { createReview } from "../store/reviews/thunks";
// import { markBookingAsReviewed } from "../store/bookings/slice";

const ReviewSitter = () => {

  const { bookingId } = useParams();
  const api = useApi();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError)


  const [review, setReviews] = useState({
    booking_id: bookingId,
    score: "",
    message: "",

  });
  const handleInputChange = (event) => {
    setReviews({ ...review, [event.target.name]: event.target.value });
  };

  const handleReview = (e) => {
    e.preventDefault();
    if (!review.message || !review.score === '') {
      toast.error('Please fill out all required fields.');
      return;
    }

    dispatch(createReview(review, api))
      .then((response) => {
        toast.success('Review created sucessfully!');
        // dispatch(markBookingAsReviewed(bookingId));
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
    <div className="max-w-md mx-auto mt-8 p-6 bg-stone-900 rounded-md shadow-md">
      <h2 className="text-2xl text-gray-100 font-bold mb-4">Review</h2>
      {error && <div className="text-red-500 mb-4"></div>}
      <p className="mb-2 text-gray-100 text-lg">Booking Id: {bookingId}</p>

      <form onSubmit={handleReview}>
        <label className="block mb-4">

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

          <input
            type="number"
            value={review.score}
            placeholder="Enter your review score"
            onChange={handleInputChange}
            name="score"
            className="mt-1 p-2 border rounded-md w-full"
            min="0"
            max="5"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-purple-700"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>


    </div>
  );
};
export default ReviewSitter;