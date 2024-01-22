import { configureStore } from "@reduxjs/toolkit";
import sitterProfilesReducer from "./sitterProfiles/slice";
 

const store = configureStore({
    reducer: {
        sitterProfiles: sitterProfilesReducer
    },
});

export default store;