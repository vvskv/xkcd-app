import { configureStore } from '@reduxjs/toolkit';
import { comicsNameReducer, comicsReducer } from './comics';
import { currentNumberNameReducer, currentNumberReducer } from './currentNumber';

export const store = configureStore({
    reducer: {
        [comicsNameReducer]: comicsReducer,
        [currentNumberNameReducer]: currentNumberReducer,
    },
    devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
