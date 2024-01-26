export const selectSitterProfiles = (reduxState) => 
{
    return reduxState.sitterProfiles.profiles;
}
export const selectIsLoading = (reduxState) => {
    return reduxState.sitterProfiles.isLoading;
}
export const selectError = (reduxState) => {
    return reduxState.sitterProfiles.error;

}

export const selectCityFilter = (reduxState) => {
    return reduxState.sitterProfiles.cityfilter;
}