import { configureStore } from '@reduxjs/toolkit';
import drawReducer from './drawSlice';

export const store = configureStore({
  reducer: {
    draw: drawReducer,
  },
});
