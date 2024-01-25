
import { createSlice } from '@reduxjs/toolkit';

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
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
        profiles: [...state.profiles, action.payload],
      };
    },
     cancelBooking: (state, action) => {
      const updatedBooking = action.payload;
      const index = state.findIndex(booking => booking.id === updatedBooking.id);

      if (index !== -1) {
        state[index] = updatedBooking;
      }
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    
    },
});

export const { setBookings, addBooking, cancelBooking, setError, setLoading  } = bookingsSlice.actions;
export default bookingsSlice.reducer;