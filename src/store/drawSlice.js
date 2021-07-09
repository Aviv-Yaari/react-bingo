import { createSlice } from '@reduxjs/toolkit';
import {
  initPossibleNums,
  initBoards,
  initPlayers,
  updateBoards,
  updateScores,
  checkGameOver,
  drawOne,
} from './helper-functions';

const initialState = {
  possibleNums: [],
  drawnNums: [],
  boards: [],
  players: [],
  isGameOver: false,
};

export const drawSlice = createSlice({
  name: 'draw',
  initialState,
  reducers: {
    startGame: (state) => {
      if (state.isGameOver) state.isGameOver = false;
      if (state.drawnNums.length) state.drawnNums = [];
      state.possibleNums = initPossibleNums();
      initBoards(state);
      initPlayers(state);
    },
    drawNum: (state) => {
      drawOne(state);
      updateBoards(state);
      updateScores(state);
      checkGameOver(state);
    },
    returnToHistory: (state, action) => {
      if (state.isGameOver) state.isGameOver = false;
      const index = action.payload;
      const deletedNums = state.drawnNums.splice(index + 1);
      state.possibleNums.push(...deletedNums);
      updateBoards(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { drawNum, returnToHistory, restartGame, startGame } =
  drawSlice.actions;

export default drawSlice.reducer;
