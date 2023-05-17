import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IArrReq {
    req: Array<String>;
}

const initialState: IArrReq = {
    req: [],
};

const slice = createSlice({
    name: 'translateReq',
    initialState,
    reducers: {
        addToArrOfReq(state, { payload }: PayloadAction<IArrReq>) {
            state.req = [...state.req, ...payload.req];
        },
        clearArrOfReq(state) {
            state.req = [];
            // console.log('!!!');
        },
    },
});

export const { reducer: arrTextReducer, name: arrTextNameReducer, actions } = slice;
export const { addToArrOfReq, clearArrOfReq } = actions;
