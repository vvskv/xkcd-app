import { createSlice } from '@reduxjs/toolkit';
import { getComics } from './request';

interface IComicsState {
    comics: {
        data: any;
        isSuccess: boolean;
        isLoading: boolean;
        isError: boolean;
    };
}

const initialState: IComicsState = {
    comics: {
        data: null,
        isSuccess: false,
        isLoading: false,
        isError: false,
    },
};

const slice = createSlice({
    name: 'comics',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getComics.pending, (state) => {
            return {
                ...state,
                comics: { ...state.comics, isLoading: true, isSuccess: false, isError: false },
            };
        });
        builder.addCase(getComics.fulfilled, (state, { payload }) => {
            return {
                ...state,
                comics: {
                    ...state.comics,
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    data: payload,
                },
            };
        });
        builder.addCase(getComics.rejected, (state) => {
            return {
                ...state,
                comics: {
                    ...state.comics,
                    isLoading: false,
                    isSuccess: false,
                    isError: true,
                    data: null,
                },
            };
        });
    },
});

export const { reducer: comicsReducer, name: comicsNameReducer } = slice;
