
import { createSlice } from '@reduxjs/toolkit';

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    reviewedBookings: [],
    isLoading: false,
      error: null,
  },
  reducers: {
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },
    addBooking: (state, action) => {
     return {
        ...state,
        profiles: [...state.bookings, action.payload],
      };
    },
    cancelBooking: (state, action) => {
      console.log("cancelBooking slice");
        
      const canceledBookingId = action.payload;
      state.bookings = state.bookings.map((booking) =>
        booking.id === canceledBookingId ? { ...booking, is_canceled: true } : booking
      );
    },
    markBookingAsReviewed(state, action) {
      const bookingId = action.payload;
      state.reviewedBookings.push(bookingId);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      console.log("setLoading");
      state.isLoading = action.payload;
    },
    
    },
});

export const { setBookings, addBooking, cancelBooking, setError, setLoading,markBookingAsReviewed } = bookingsSlice.actions;
export default bookingsSlice.reducer;