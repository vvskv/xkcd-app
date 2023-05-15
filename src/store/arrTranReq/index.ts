import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IArrText {
    source: Array<String>;
    translated: Array<String>;
}

const initialState: IArrText = {
    source: [],
    translated: [],
};

const slice = createSlice({
    name: 'textArr',
    initialState,
    reducers: {
        addToArr(state, { payload }: PayloadAction<IArrText>) {
            state.source = [...state.source, ...payload.source];
            state.translated = [...state.translated, ...payload.translated];
        },
        // addTranslated(state, { payload }: PayloadAction<IArrText>) {
        //     state.translated = [...state.translated, ...payload.translated];
        // },
    },
});

export const { reducer: arrTextReducer, name: arrTextNameReducer, actions } = slice;
export const { addToArr } = actions;
