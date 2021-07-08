import { configureStore } from '@reduxjs/toolkit';
import drawReducer from './drawSlice';
import gameReducer from './gameSlice';

export const store = configureStore({
  reducer: {
    draw: drawReducer,
    game: gameReducer,
  },
});
