import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { selectLoading } from "../store/reviews/selectors";
import { selectError } from "../store/bookings/selectors";
import { setReviews } from "../store/reviews/slice";
import { createReviews } from "../store/reviews/thunks";

const ReviewSitter = () => {
  
//    const isLoading = useSelector(selectLoading)
//   const error = useSelector(selectError)
    const { booking } = useParams();
     const api = useApi();
    const dispatch = useDispatch();
     const isLoading = useSelector(selectLoading)
  const error = useSelector(selectError)
    const [review, setReviews] = useState({
     score: 0,
     message: "",
    booking_id:booking.booking_id,
  });
   const handleInputChange = (event) => {
    setReviews({ ...review, [event.target.name]: event.target.value });
  };
  
    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReviews( review, api))
    .then((response) => {
         // If the promise resolves without an error, display success toast
         toast.success('Review created sucessfully!');
         // Optionally, clear the form data after successful booking
         setReviews({
             score: 0,
             message: "",
             booking_id: booking.booking_id,
         });

    })
        .catch((error) => {
      // If there's an error in the booking process, display error toast
      console.error('Error while review:', error);
      toast.error('review failed. Please try again.');
    });
};return (
    <form onSubmit={handleSubmit}>
      <textarea value={review} onChange= {handleInputChange} />
      <button type="submit">Submit Review</button>
    </form>
  );
};
export default ReviewSitter;