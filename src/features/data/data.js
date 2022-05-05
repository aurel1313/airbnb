import { createSlice } from "@reduxjs/toolkit";
import data3 from "../../Data/data3.json";
const json = JSON.parse(localStorage.getItem('user'))
export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value:data3,
        
        
    },
    reducers: {
       displayData: (state, action) => {
        state.value = action.payload
        state.value2 = action.payload
       }
    

    }
});
export const { displayData } = dataSlice.actions;
export default dataSlice.reducer;