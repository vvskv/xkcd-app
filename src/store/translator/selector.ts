import { createSelector } from '@reduxjs/toolkit';
import { TState } from '../configureStore';

const getTranslate = (state: TState) => state.text;

export const getTranslateText = createSelector(getTranslate, ({ output }) => output);
export const getTranslateIsSuccess = createSelector(getTranslate, ({ status }) => status.isSuccess);

// const getComicsState = (state: TState) => state.comics;

// export const getComicsSelector = createSelector(getComicsState, ({ comics }) => comics.data);
// export const getComicsIsError = createSelector(getComicsState, ({ comics }) => comics.isError);
// export const getComicsIsSuccess = createSelector(getComicsState, ({ comics }) => comics.isSuccess);
// export const getComicsIsLoading = createSelector(getComicsState, ({ comics }) => comics.isLoading);
