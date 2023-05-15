import { configureStore } from '@reduxjs/toolkit';
import { comicsNameReducer, comicsReducer } from './comics';
import { translateNameReducer, translateReducer } from './translator';

export const store = configureStore({
    reducer: {
        [comicsNameReducer]: comicsReducer,
        [translateNameReducer]: translateReducer,
    },
    devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
