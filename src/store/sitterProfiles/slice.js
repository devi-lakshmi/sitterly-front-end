import { createSlice } from "@reduxjs/toolkit";

export const sitterProfilesSlice = createSlice({
  name: "sitterprofile",
  initialState: {
    profiles: [],
    cityfilter: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    setSitterProfiles: (state, action) => {
      state.profiles = action.payload;
    },
    addProfile: (state, action) => {
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCityfilter: (state, action) => {
      state.cityfilter = action.payload;
    },
    clearCityfilter: (state) => {
      state.cityfilter = "";
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});


export const { setSitterProfiles, addProfile, setCityfilter , clearCityfilter,setError} = sitterProfilesSlice.actions;

export default sitterProfilesSlice.reducer;