// import { createAsyncThunk } from '@reduxjs/toolkit'
import { setSitterProfiles } from "./slice";

export function createSitterProfile(sitterProfileData, api) {
  return async function thunk(dispatch) {
    try {
      const token = localStorage.setItem("sitterly_token", api);
      const response = api.post("/createSitterProfile", sitterProfileData, token);
      return response.data;
    }
    catch (error) {
      // Handle errors, e.g., dispatch an action to set an error state
      console.error("Error while createing sitterprofile :", error);
       throw error;
    }
  }
};
export function browseSitterProfiles(api, currentpage, cityFilter) {
  return async function thunk(dispatch) {
    
    try {
      const token = localStorage.getItem("sitterly_token");
     
      const response = await api.get(`/getSitterProfiles/?page=${currentpage}&city=${cityFilter}`, token);
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