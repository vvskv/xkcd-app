import { createSelector } from '@reduxjs/toolkit';
import { TState } from '../configureStore';

const getComicsState = (state: TState) => state.comics;

export const getComicsSelector = createSelector(getComicsState, ({ comics }) => comics.data);
export const getComicsIsError = createSelector(getComicsState, ({ comics }) => comics.isError);
export const getComicsIsSuccess = createSelector(getComicsState, ({ comics }) => comics.isSuccess);
export const getComicsIsLoading = createSelector(getComicsState, ({ comics }) => comics.isLoading);
