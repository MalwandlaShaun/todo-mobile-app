import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./features/goalSlice";

const store = configureStore({
  reducer: {
    goal: goalReducer,
  },
});

export default store;
