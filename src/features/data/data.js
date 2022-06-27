import { createSlice } from "@reduxjs/toolkit";
import data3 from "../../Data/data3.json";
const json = JSON.parse(localStorage.getItem('user'))
const file =localStorage.getItem('pictures')
export const dataSlice = createSlice({
    name: "data",
    initialState: {
        value:data3,
        value2:json,
        value3:{records:{}}
        
        
    },
    reducers: {
       displayData: (state, action) => {
        state.value = action.payload
        state.value2 = action.payload
       
       },
       addItem: (state, action) => {
        state.value3 = [...state.value3, ...action.payload ]
       
       }

        
    

      
    

    }
});
export const { displayData,displayArray,addItem } = dataSlice.actions;
export default dataSlice.reducer;