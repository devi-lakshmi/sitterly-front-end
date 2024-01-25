// import { createAsyncThunk } from '@reduxjs/toolkit'
import { addProfile, setSitterProfiles } from "./slice";

export function createSitterProfile(sitterProfileData, api) {
  return async function thunk(dispatch) {
    
    const token = localStorage.setItem("sitterly_token",api);
    const response = api.post("/createSitterProfile", sitterProfileData, token);
    // const sitterProfile=response.data
    // dispatch(addProfile(sitterProfile));
      return response.data
  }
}

export function browseSitterProfiles(api, currentpage) {
  return async function thunk(dispatch) {
    
    try {
      const token = localStorage.getItem("sitterly_token");
     
      const response = await api.get(`/getSitterProfiles/?page=${currentpage}`, token);
      console.log("browseSitterProfiles Response:")
      console.log(response)
      const sitterProfile = response.data
      dispatch(setSitterProfiles(sitterProfile));
    }
    catch (error) {
      // Handle errors, e.g., dispatch an action to set an error state
      console.error("Error fetching sitter profiles:", error);
    }
  }
};