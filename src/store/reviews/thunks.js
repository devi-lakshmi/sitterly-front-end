import { addReview, setError, setLoading } from "./slice";

export function createReviews(review, api) {
    return async function thunk(dispatch) {
        try {
           const token = localStorage.getItem("sitterly_token");
            const response = await api.post("/reviews", review, token);
            const reviews = response.data
            dispatch(addReview(reviews));
            return response.data
        }
  catch (error) {
      console.error('Error reviews:', error);
   dispatch(setError('Failed to review. '));
      throw error;
        } 
    finally {
      dispatch(setLoading(false));
    }
    }
};