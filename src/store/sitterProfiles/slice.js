import { createSlice } from "@reduxjs/toolkit";

export const sitterProfilesSlice = createSlice({
    name: "sitterprofile",
    initialState: {
        profiles: [],
        isLOading: false,
    },
    reducers: {
     setSitterProfiles: (state, action) => {
            state.profiles=action.payload;
        },
     addProfile: (state, action) => {
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };
    },
    
    
    },  

});


export const { setSitterProfiles,addProfile} = sitterProfilesSlice.actions;

export default sitterProfilesSlice.reducer;