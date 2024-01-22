import { configureStore } from "@reduxjs/toolkit";
import sitterProfilesReducer from "./sitterProfiles/slice";
import bookingsReducer from "./bookings/slice";

const store = configureStore({
    reducer: {
        sitterProfiles: sitterProfilesReducer,
        bookings:bookingsReducer,
    },
});

export default store;