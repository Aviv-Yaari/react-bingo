import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  possibleNums: [],
  drawnNums: [],
};

export const drawSlice = createSlice({
  name: 'draw',
  initialState,
  reducers: {
    resetPossibleNums: (state) => {
      state.possibleNums.splice([0]); // empty the array first
      for (let i = 1; i <= 100; i++) {
        state.possibleNums.push(i);
      }
    },
    drawNum: (state) => {
      const randomNum = Math.floor(
        Math.random() * (state.possibleNums.length - 1)
      );
      const drawnNum = state.possibleNums.splice(randomNum, 1)[0];
      state.drawnNums.push(drawnNum);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = drawSlice.actions;

export default drawSlice.reducer;
