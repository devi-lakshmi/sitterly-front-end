export const selectReviews = (reduxState) => {
    return reduxState.reviews.reviews;

}
export const selectLoading = (reduxState) => {
    return reduxState.reviews.isLoading;

}
export const selectError = (reduxState) => {
    return reduxState.reviews.error;

}
