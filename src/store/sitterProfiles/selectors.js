export const selectSitterProfiles = (reduxState) => 
{
    return reduxState.sitterProfiles.profiles;
}
export const selectIsLoading = (reduxState) => {
    return reduxState.sitterProfiles.isLoading;
}