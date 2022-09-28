import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../pages/CreateEvent/CreateSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});



export default store;