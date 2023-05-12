import { createSelector } from '@reduxjs/toolkit';
import { TState } from '../configureStore';

const getTranslate = (state: TState) => state.text;

export const getTranslateText = createSelector(getTranslate, ({ output }) => output.data);
export const getTranslateIsSuccess = createSelector(getTranslate, ({ output }) => output.isSuccess);
export const getTranslateIsLoading = createSelector(getTranslate, ({ output }) => output.isLoading);
export const getTranslateIsError = createSelector(getTranslate, ({ output }) => output.isError);
