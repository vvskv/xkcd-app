import { createSlice } from '@reduxjs/toolkit';
import { postTranslateText } from './request';

interface ITranslateText {
    output: {
        data: any;
        isSuccess: boolean;
        isLoading: boolean;
        isError: boolean;
    };
}

const initialState: ITranslateText = {
    output: {
        data: null,
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
                output: { ...state.output, isLoading: true, isSuccess: false, isError: false },
            };
        });
        builder.addCase(postTranslateText.fulfilled, (state, { payload }) => {
            return {
                ...state,
                output: {
                    ...state.output,
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    data: payload,
                },
            };
        });
        builder.addCase(postTranslateText.rejected, (state) => {
            return {
                ...state,
                output: {
                    ...state.output,
                    isLoading: false,
                    isSuccess: false,
                    isError: true,
                    data: null,
                },
            };
        });
    },
});

export const { reducer: translateReducer, name: translateNameReducer } = slice;
