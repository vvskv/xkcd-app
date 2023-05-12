import { createSelector } from '@reduxjs/toolkit';
import { TState } from '../configureStore';

const getData = (state: TState) => state.textArr;

export const getArrSource = createSelector(getData, ({ source }) => source);
export const getArrTranslated = createSelector(getData, ({ translated }) => translated);
