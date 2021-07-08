import { createSlice } from '@reduxjs/toolkit';

const initPossibleNums = () => {
  const possibleNumsArr = [];
  for (let i = 1; i <= 100; i++) {
    // temp change to 50, should be 100
    possibleNumsArr.push(i);
  }
  return possibleNumsArr;
};

const initialState = {
  possibleNums: initPossibleNums(),
  drawnNums: [],
  initialNums: [],
};

export const drawSlice = createSlice({
  name: 'draw',
  initialState,
  reducers: {
    resetPossibleNums: (state) => {
      state.possibleNums = initPossibleNums();
    },
    resetInitialNums: (state) => {
      state.initialNums = [];
    },
    drawInitialNum: (state) => {
      const randomNum = Math.floor(
        Math.random() * (state.possibleNums.length - 1)
      );
      const drawnNum = state.possibleNums.splice(randomNum, 1)[0];
      state.initialNums.push(drawnNum);
    },
    drawNum: (state) => {
      const randomNum = Math.floor(
        Math.random() * (state.possibleNums.length - 1)
      );
      const drawnNum = state.possibleNums.splice(randomNum, 1)[0];
      state.drawnNums.push(drawnNum);
    },
    returnToHistory: (state, action) => {
      // after clicking a ball that has already been drawn,
      // the game will 'return in history' to that position
      // player scores and boards will be updated.

      // the function recieves index of the clicked num inside the drawnNums array
      const index = action.payload;

      const deletedNums = state.drawnNums.splice(index + 1);
      state.possibleNums.push(...deletedNums);
    },
    restartGame: (state) => {
      state.drawnNums = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  resetPossibleNums,
  drawNum,
  drawInitialNum,
  returnToHistory,
  resetInitialNums,
  restartGame,
} = drawSlice.actions;

export default drawSlice.reducer;
