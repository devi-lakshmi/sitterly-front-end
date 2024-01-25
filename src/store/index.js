import { configureStore } from "@reduxjs/toolkit";
import sitterProfilesReducer from "./sitterProfiles/slice";
import bookingsReducer from "./bookings/slice";
import reviewsReducer from "./reviews/slice";
const store = configureStore({
    reducer: {
        sitterProfiles: sitterProfilesReducer,
        bookings:bookingsReducer,
        reviwes:reviewsReducer,
    },
});

export default store;