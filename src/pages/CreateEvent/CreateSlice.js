import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    event:"",
    host:"",
    start:"",
    end:"", 
    location:""
  };
  
  export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
      createEvent: (state,actions) => {
        console.log(actions.payload);
        state.event = actions.payload.event;
        state.host = actions.payload.host;
        state.start = actions.payload.start;
        state.end = actions.payload.end
        state.location = actions.payload.location
      },
    },
  });
  
  export const { createEvent } = counterSlice.actions;
  export default counterSlice.reducer;