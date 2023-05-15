import { configureStore } from '@reduxjs/toolkit';
import { comicsNameReducer, comicsReducer } from './comics';
import { translateNameReducer, translateReducer } from './translatorRequest';
import { arrTextNameReducer, arrTextReducer } from './arrTranReq';

export const store = configureStore({
    reducer: {
        [comicsNameReducer]: comicsReducer,
        [translateNameReducer]: translateReducer,
        [arrTextNameReducer]: arrTextReducer,
    },
    devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
