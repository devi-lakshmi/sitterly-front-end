export const selectBookings = (reduxState) => {
    return reduxState.bookings.bookings;

}
export const selectLoading = (reduxState) => {
    return reduxState.bookings.isLoading;

}
export const selectError = (reduxState) => {
    return reduxState.bookings.error;

}
export const selectCancel = (reduxState) => {
    return reduxState.bookings.isCancelled;

}
export const selectReviewedBookings = (reduxState) => {
    return reduxState.bookings.reviewedBookings;

}