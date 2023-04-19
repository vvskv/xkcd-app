import { configureStore } from '@reduxjs/toolkit';
import { comicsNameReducer, comicsReducer } from './comics';

export const store = configureStore({
    reducer: {
        [comicsNameReducer]: comicsReducer,
    },
    devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
