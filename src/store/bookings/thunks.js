import { addBooking,setBookings ,cancelBooking,setError,setLoading} from "./slice";


export function createBooking(form,api) {
    return async function thunk(dispatch) {
        try {
            const token = localStorage.setItem("sitterly_token", api);
            const response = await api.post("/createBookings", form,token);
            const booking = response.data
            dispatch(addBooking(booking));
            return response.data
        }
  catch (error) {
      console.error('Error booking sitter:', error);
      // Handle error, dispatch an action or show an error message
    dispatch(setError('Failed to bookingsitter. Please try again.')); // Set a meaningful error message
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
      // Handle errors, e.g., dispatch an action to set an error state
      console.error("Error fetching bookings:", error);
    dispatch(setError('Failed to browsebooking. Please try again.')); // Set a meaningful error message
      } 
    finally {
      dispatch(setLoading(false));
    }
  }
};
export function cancelBookings(id, api) {
    console.log("cancelBookings");
  return async function thunk(dispatch, getState) {
    
    try {
      const token = localStorage.getItem("sitterly_token");
     
        const response = await api.put(`/cancelMyBooking/${id}`, token);
        const updatedBooking = response.data;
        console.log('Response from API:', response);
      console.log('Updated Booking:', updatedBooking);
        
        dispatch(cancelBooking(updatedBooking));
    }
    catch (error) {
      // Handle errors, e.g., dispatch an action to set an error state
      console.error('Error canceling booking:', error);
     dispatch(setError('Failed to cancel booking. Please try again.')); // Set a meaningful error message
      } 
    finally {
      dispatch(setLoading(false));
    }
  }
};