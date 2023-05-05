import { createSelector } from '@reduxjs/toolkit';
import { TState } from '../configureStore';

const getCurrentNumber = (state: TState) => state.currentNumber;

export const getCurNum = createSelector(getCurrentNumber, ({ num }) => num);
