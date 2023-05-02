import { createSelector } from '@reduxjs/toolkit';
import { TState } from '../configureStore';

const getNextRequestStatus = (state: TState) => state.nextRequest;

export const getNextReqtStatus = createSelector(getNextRequestStatus, ({ status }) => status);
