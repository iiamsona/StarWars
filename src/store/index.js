// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './slices/characterSlice';

const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});

export default store;
