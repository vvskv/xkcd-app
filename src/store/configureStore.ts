import { configureStore } from '@reduxjs/toolkit';
import { comicsNameReducer, comicsReducer } from './comics';
import { currentNumberNameReducer, currentNumberReducer } from './currentNumber';
import { translateNameReducer, translateReducer } from './translator';

export const store = configureStore({
    reducer: {
        [comicsNameReducer]: comicsReducer,
        [currentNumberNameReducer]: currentNumberReducer,
        [translateNameReducer]: translateReducer,
    },
    devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
