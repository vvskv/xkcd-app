import { createSelector } from '@reduxjs/toolkit';
import { TState } from '../configureStore';

const getData = (state: TState) => state.textArr;

export const getArrText = createSelector(getData, ({ data }) => data);
