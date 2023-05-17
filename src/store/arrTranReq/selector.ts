import { createSelector } from '@reduxjs/toolkit';
import { TState } from '../configureStore';

const getData = (state: TState) => state.translateReq;

export const getTranslateArrRequest = createSelector(getData, ({ req }) => req);
