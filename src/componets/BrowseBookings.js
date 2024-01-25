import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useApi } from '../hooks/useApi';
import { selectBookings } from '../store/bookings/selectors';
import { browsebookings, cancelBookings } from '../store/bookings/thunks';
import { cancelBooking } from '../store/bookings/slice';

const BrowseBookings = ({ userType }) => {
    const api = useApi();
    const dispatch = useDispatch();
  
    const bookings = useSelector(selectBookings); // Assuming your bookings are stored in the Redux state
    
    console.log("bookingdata" + bookings)
    
     useEffect(() => {
        dispatch(browsebookings(api));
    }, [dispatch, api]);
  
    const getUserTypeText = (booking) => {
    return booking.role;
  };
const handleCancelBooking = (id) => {
    // Dispatch the cancelBooking action with the booking ID
    dispatch(cancelBookings(id, api));
  };
return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
      <ul className="space-y-4">
            {bookings.map(booking => (
                <li key={booking.id} className="bg-white p-4 rounded-md shadow-md">
                    <strong className="block mb-2">{getUserTypeText(booking)}:</strong>
                    <p className="mb-2">Start Date: {booking.starts_at}</p>
                    <p className="mb-2">End Date: {booking.ends_at}</p>
                    <p className="mb-2">Description: {booking.description}</p>
                    {/* Add more details based on your booking structure */}
                     {booking.is_canceled ? (
              <p className="text-red-500 font-bold">Booking Cancelled</p>
            ) : (
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => handleCancelBooking(booking.id)}
              >
                Cancel Booking
              </button>
            )}
                  
                
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BrowseBookings;