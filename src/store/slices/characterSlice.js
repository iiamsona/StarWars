// store/slices/characterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedCards: [],
  filter: 'All', // Can be 'All' or 'Liked'
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    toggleLiked: (state, action) => {
      const index = action.payload;
      if (state.likedCards.includes(index)) {
        state.likedCards = state.likedCards.filter((i) => i !== index);
      } else {
        state.likedCards.push(index);
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { toggleLiked, setFilter } = characterSlice.actions;
export default characterSlice.reducer;
