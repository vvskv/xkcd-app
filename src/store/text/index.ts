import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IArrText {
    data: Array<String>;
}

const initialState: IArrText = {
    data: [],
};

const slice = createSlice({
    name: 'textArr',
    initialState,
    reducers: {
        addText(state, { payload }: PayloadAction<IArrText>) {
            return { ...state, ...payload };
        },
    },
});

export const { reducer: arrTextReducer, name: arrTextNameReducer, actions } = slice;
export const { addText } = actions;
