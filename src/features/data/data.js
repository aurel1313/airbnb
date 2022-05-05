import { createSlice } from "@reduxjs/toolkit";
import data3 from "../../Data/data3.json";
export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value:data3
    },
    reducers: {
       displayData: (state, action) => {
        state.value = action.payload
       }
    }
});
export const { displayData } = dataSlice.actions;
export default dataSlice.reducer;