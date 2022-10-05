import { configureStore } from '@reduxjs/toolkit';
import FoodSlice from '../slices/FoodSlice';

const store = configureStore({
  reducer: {
    food: FoodSlice.reducer,
  },
});

export default store;
