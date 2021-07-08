import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isGameOver: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameOver: (state, action) => {
      state.isGameOver = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGameOver } = gameSlice.actions;

export default gameSlice.reducer;
