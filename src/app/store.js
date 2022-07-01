import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { dataSlice } from '../features/data/data'
export default configureStore({
  reducer: {
    data: dataSlice.reducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  },
})