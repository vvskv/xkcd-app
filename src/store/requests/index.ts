import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IRequestsStatus {
    reqNext: {
        status: boolean;
    };
    reqPrev: {
        status: boolean;
    };
}

const initialState: IRequestsStatus = {
    reqNext: {
        status: false,
    },
    reqPrev: {
        status: true,
    },
};

const slice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        setRequestsStatus(state, { type, payload }: PayloadAction<IRequestsStatus>) {
            return { ...state, ...payload };
        },
    },
});

export const { reducer: requestsStatusReducer, name: requestsStatusNameReducer, actions } = slice;
export const { setRequestsStatus } = actions;
