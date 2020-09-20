import { configureStore } from '@reduxjs/toolkit';
import salesDataReducer from '../features/Home/salesDataSlice';

export default configureStore({
  reducer: {
    salesData: salesDataReducer,
  },
});
