import { addReview, setError, setLoading } from "./slice";

export function createReview(review, api) {
  return async function thunk(dispatch) {
    try {
      dispatch(setLoading(true));
      const token = localStorage.getItem("sitterly_token");
      const response = await api.post("/reviews", review, token);
      dispatch(addReview(response.data));
      // return response.data;
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

// export function getRviews(api) {
//     return async function thunk(dispatch) {
//         try {
//              dispatch(setLoading(true));
//           const token = localStorage.getItem("sitterly_token");
//           const reviews = await api.get(`/getReviews`, token);
//           dispatch(setReviews(reviews.data));
//         }
//   catch (error) {
//       console.error('Error reviews:', error);
//    dispatch(setError('Failed to get review. '));
//       throw error;
//         } 
//     finally {
//       dispatch(setLoading(false));
//     }
//     }
// };