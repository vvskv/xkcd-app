import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { postTranslateText } from './request';

interface ITranslateText {
    output: {
        data: any;
        isSuccess: boolean;
        isLoading: boolean;
        isError: boolean;
    };
    arrTranResponce: Array<String>;
}

const initialState: ITranslateText = {
    output: {
        data: null,
        isSuccess: false,
        isLoading: false,
        isError: false,
    },
    arrTranResponce: [],
};

const slice = createSlice({
    name: 'translateRes',
    initialState,
    reducers: {
        clearArrOfRes(state) {
            state.arrTranResponce = [];
        },
    },
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
                arrTranResponce: [...state.arrTranResponce, payload.data.translatedText],
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

export const { reducer: translateReducer, name: translateNameReducer, actions } = slice;
export const { clearArrOfRes } = actions;
