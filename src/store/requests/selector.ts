import { createSelector } from '@reduxjs/toolkit';
import { TState } from '../configureStore';

const getRequestsStatus = (state: TState) => state.requests;

export const getReqNextStatus = createSelector(getRequestsStatus, ({ reqNext }) => reqNext.status);
export const getReqPrevStatus = createSelector(getRequestsStatus, ({ reqPrev }) => reqPrev.status);
