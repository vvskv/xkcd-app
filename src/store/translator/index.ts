import { createSlice } from '@reduxjs/toolkit';
import { postTranslateText } from './request';

interface ITranslateText {
    output: [];
    status: {
        isSuccess: boolean;
        isLoading: boolean;
        isError: boolean;
    };
}

const initialState: ITranslateText = {
    output: [],
    status: {
        isSuccess: false,
        isLoading: false,
        isError: false,
    },
};

const slice = createSlice({
    name: 'text',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(postTranslateText.pending, (state) => {
            return {
                ...state,
                status: { isLoading: true, isSuccess: false, isError: false },
            };
        });
        builder.addCase(postTranslateText.fulfilled, (state, { payload }) => {
            return {
                ...state,
                output: payload,
                status: { isLoading: false, isSuccess: true, isError: false },
            };
        });
        builder.addCase(postTranslateText.rejected, (state) => {
            return {
                ...state,
                status: { isLoading: false, isSuccess: false, isError: true },
            };
        });
    },
});

export const { reducer: translateReducer, name: translateNameReducer } = slice;
