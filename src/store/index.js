import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './slices/characterSlice.js';

const store = configureStore({
  reducer: {
    character: characterReducer
  }
});

export default store;
