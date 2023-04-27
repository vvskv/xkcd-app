import { configureStore } from '@reduxjs/toolkit';
import { comicsNameReducer, comicsReducer } from './comics';
import { requestsStatusNameReducer, requestsStatusReducer } from './requests';

export const store = configureStore({
    reducer: {
        [comicsNameReducer]: comicsReducer,
        [requestsStatusNameReducer]: requestsStatusReducer,
    },
    devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
