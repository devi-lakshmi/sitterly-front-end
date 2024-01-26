import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useApi } from '../hooks/useApi';
import { selectBookings } from '../store/bookings/selectors';
import { browsebookings, cancelBookings } from '../store/bookings/thunks';
import { useAuth } from '../hooks/useAuth';
import ReviewSitter from './ReviewSitter';
import { Link, useNavigate } from 'react-router-dom';



const BrowseBookings = ({ userType }) => {
    const api = useApi();
  const { userRole } = useAuth();
    const navigate = useNavigate();

     const currentDate = new Date();

    const dispatch = useDispatch();
  
    const bookings = useSelector(selectBookings);
    
    
     useEffect(() => {
        dispatch(browsebookings(api));
     }, [dispatch, api]);
  
  
     useEffect(() => {
        dispatch(cancelBookings(api));
     }, [dispatch, api]);
  
    const getUserTypeText = () => {
        return userRole;
  };
const handleCancelBooking = (id) => {
    // Dispatch the cancelBooking action with the booking ID
  dispatch(cancelBookings(id, api));
  };
const handleReviewBooking = (bookingId) => {
    // Dispatch the cancelBooking action with the booking ID
    // dispatch(cancelBookings(bookingId, api));
   navigate(`/reviews/${bookingId}`);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-yellow-100 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
     <div className="flex flex-wrap -mx-4">
  {bookings.map((booking) => (
    <div key={booking.id} className="w-full md:w-1/1 lg:w-1/2 xl:w-1/2 px-4 mb-4">
      <div className="bg-white p-6 rounded-md shadow-md max-w-xs">
              <strong className="block mb-4 text-mid">Booked by: {getUserTypeText()}</strong>
              <p className="mb-2 text-lg">Start Date: {booking.starts_at}</p>
              <p className="mb-2 text-sm">End Date: {booking.ends_at}</p>
             
              {booking.is_canceled ? (
                <p className="text-red-500 font-bold text-sm">Booking Cancelled</p>
              ) : new Date(booking.starts_at) > currentDate && (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm"
                  onClick={() => handleCancelBooking(booking.id)}
                >
                  Cancel Booking
              </button>      
        )}
         <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm"
                  onClick={() => handleReviewBooking(booking.id)}
                >
                  Review Booking
            </button>
                    
          </div>
          </div>
        ))}
      </div>
      <div className="button-container flex space-x-4 mt-4">
        <Link to ={"/reviews"}>Reviews</Link>
      <Link to={"/home"} className="bg-blue-500 text-white py-2 px-4 rounded">
          Go to HomePage
        </Link>
        <Link to={"/getSitterProfiles"} className="bg-blue-500 text-white py-2 px-4 rounded">
          Go to your booking page
        </Link>
      </div>
    </div>
  );
};

export default BrowseBookings;