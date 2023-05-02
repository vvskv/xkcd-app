import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface INextRequestStatus {
    status: boolean;
}

const initialState: INextRequestStatus = {
    status: false,
};

const slice = createSlice({
    name: 'nextRequest',
    initialState,
    reducers: {
        setNextRequestStatus(state, { type, payload }: PayloadAction<INextRequestStatus>) {
            return { ...state, ...payload };
        },
    },
});

export const { reducer: nextRequestStatusReducer, name: nextRequestStatusNameReducer, actions } = slice;
export const { setNextRequestStatus } = actions;
