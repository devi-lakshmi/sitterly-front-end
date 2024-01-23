import { addBooking,setBookings ,cancelBooking,setError,setLoading} from "./slice";


export function createBooking(booking, api) {
    return async function thunk(dispatch) {
        try {
            const token = localStorage.setItem("sitterly_token", api);
            const response = await api.post("/createBookings", booking, token);
            const booking1 = response.data
            dispatch(addBooking(booking1));
            return response.data
        }
  catch (error) {
      console.error('Error booking sitter:', error);
    dispatch(setError('Failed to bookingsitter. Please try again.')); 
      } 
    finally {
      dispatch(setLoading(false));
    }
    }
};

export function browsebookings(api) {
    console.log("browse thunks");
  return async function thunk(dispatch) {
    
    try {
      const token = localStorage.getItem("sitterly_token");
     
      const response = await api.get("/bookings", token);
      
      console.log(response)
      const bookings = response.data
      dispatch(setBookings(bookings));
    }
    catch (error) {
      console.error("Error fetching bookings:", error);
    dispatch(setError('Failed to browsebooking. Please try again.')); 
      } 
    finally {
      dispatch(setLoading(false));
    }
  }
};
export function cancelBookings(id, api) {
  return async function thunk(dispatch) {
    
    try {
      const token = localStorage.getItem("sitterly_token");
     
        const response = await api.put(`/cancelMyBooking/${id}`, token);
        const updatedBooking = response.data;
        
        dispatch(cancelBooking(updatedBooking));
    }
    catch (error) {
      console.error('Error canceling booking:', error);
     dispatch(setError('Failed to cancel booking. Please try again.'));
      } 
    finally {
      dispatch(setLoading(false));
    }
  }
};