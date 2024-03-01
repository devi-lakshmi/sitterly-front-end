import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useApi } from '../hooks/useApi';
import { selectBookings, selectReviewedBookings } from '../store/bookings/selectors';
import { browsebookings, cancelBookings } from '../store/bookings/thunks';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const BrowseBookings = () => {
    const api = useApi();
    const { userRole } = useAuth();
    const navigate = useNavigate();
   const currentDate = new Date();
   const dispatch = useDispatch();
  const bookings = useSelector(selectBookings);
  const reviewedBookingIds = useSelector(selectReviewedBookings);  
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
  dispatch(cancelBookings(id,api));
  };
const handleReviewBooking = (bookingId) => {
    // Dispatch the cancelBooking action with the booking ID
   
  
  navigate(`/reviews/${bookingId}`);
  };

  return (
     
    <div className="max-w-lg mx-auto mt-8 p-6 bg-yellow-100 rounded-md">
           
      
      
      {bookings.length === 0 ? (
                <h2 className="text-2xl font-bold mb-4">No bookings created.</h2>
            ) : (
                <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
            )}
                 <div className="flex flex-wrap -mx-4">
                {bookings.map((booking) => (
                   
                  
                  <div key={booking.id} className="w-full md:w-1/1 lg:w-1/2 xl:w-1/2 px-4 mb-4">
                        <div className="bg-white p-6 rounded-md shadow-md max-w-xs">
                            <strong className="block mb-4 text-mid">Booked by: {getUserTypeText()}</strong>
                            <p className="mb-2 text-lg">Sitter Id: {booking.sitter_profile_id}</p>
                            <p className="mb-2 text-lg">Start Date: {booking.starts_at}</p>
                            <p className="mb-2 text-lg">End Date: {booking.ends_at}</p>
                     
                      {booking.is_canceled ? (
                        <p className="text-red-500 font-bold text-sm">Booking Cancelled</p>
                      ) : new Date(booking.ends_at) > currentDate ? (
                        <div className="flex space-x-4"> {/* Flex container */}
                          <button
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm"
                            onClick={() => handleCancelBooking(booking.id)}
                          >
                            Cancel Booking
                          </button>
                                    
                        </div>
                       ) : (
                <div>
                    {reviewedBookingIds.includes(booking.id) ? (
                        <div className="flex items-center">
                            <p className="text-green-500 font-bold text-sm mr-2">Reviewed Successfully</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M17.707 2.293a1 1 0 0 1 1.414 1.414l-11 11a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L7 12.586l10.293-10.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    ) : (
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-sm"
                            onClick={() => handleReviewBooking(booking.id)}
                        >
                            Review Booking
                        </button>
                    )}
                </div>
            )}
        </div>
  </div>
))}
            </div>
            <div className="button-container flex space-x-4 mt-4">
            </div>
        </div>
    );
};

export default BrowseBookings;