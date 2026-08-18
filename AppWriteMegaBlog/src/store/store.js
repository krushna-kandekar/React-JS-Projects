import { configureStore } from "@reduxjs/toolkit";
// import AuthReducer from ".";

const store = configureStore({
  reducer: {
    // auth: authReducer,
  },
});

export default store;
