import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICurNum {
    num: number;
}

const initialState: ICurNum = {
    num: 0,
};

const slice = createSlice({
    name: 'currentNumber',
    initialState,
    reducers: {
        setCurrentNumber(state, { type, payload }: PayloadAction<ICurNum>) {
            return { ...state, ...payload };
        },
    },
});

export const { reducer: currentNumberReducer, name: currentNumberNameReducer, actions } = slice;
export const { setCurrentNumber } = actions;
