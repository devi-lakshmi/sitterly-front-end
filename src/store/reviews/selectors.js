export const selectReviews = (reduxState) => {
    return reduxState.reviews.reviewss;

}
export const selectLoading = (reduxState) => {
    return reduxState.reviewss.isLoading;

}
export const selectError = (reduxState) => {
    return reduxState.reviews.error;

}
