import { createSlice } from '@reduxjs/toolkit';

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    isLoading: false,
      error: null,
  },
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    addReview: (state, action) => {
      return {
    
          ...state,
         reviews: [...state.reviews, action.payload],
          };
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    
    },
});

export const { setReviews, addReview, setError, setLoading  } = reviewsSlice.actions;
export default reviewsSlice.reducer;