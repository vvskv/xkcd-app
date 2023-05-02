import { configureStore } from '@reduxjs/toolkit';
import { comicsNameReducer, comicsReducer } from './comics';
import { requestsStatusNameReducer, requestsStatusReducer } from './requests';
import { nextRequestStatusNameReducer, nextRequestStatusReducer } from './nextRequest';

export const store = configureStore({
    reducer: {
        [comicsNameReducer]: comicsReducer,
        [requestsStatusNameReducer]: requestsStatusReducer,
        [nextRequestStatusNameReducer]: nextRequestStatusReducer,
    },
    devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
