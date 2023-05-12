import { configureStore } from '@reduxjs/toolkit';
import { comicsNameReducer, comicsReducer } from './comics';
import { currentNumberNameReducer, currentNumberReducer } from './currentNumber';
import { translateNameReducer, translateReducer } from './translator';
import { arrTextNameReducer, arrTextReducer } from './text';

export const store = configureStore({
    reducer: {
        [comicsNameReducer]: comicsReducer,
        [currentNumberNameReducer]: currentNumberReducer,
        [translateNameReducer]: translateReducer,
        [arrTextNameReducer]: arrTextReducer,
    },
    devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
