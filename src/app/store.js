import { configureStore } from '@reduxjs/toolkit'
import { dataSlice } from '../features/data/data'
export default configureStore({
  reducer: {
    data: dataSlice.reducer
  },
})