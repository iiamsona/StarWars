import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedCards: [],
  filter: 'All'
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    toggleLiked: (state, action) => {
      const index = action.payload;
      return {
        ...state,
        likedCards: state.likedCards.includes(index)
          ? state.likedCards.filter((i) => i !== index)
          : [...state.likedCards, index]
      };
    },
    setFilter: (state, action) => {
      return {
        ...state,
        filter: action.payload
      };
    }
  }
});

export const { toggleLiked, setFilter } = characterSlice.actions;
export default characterSlice.reducer;
