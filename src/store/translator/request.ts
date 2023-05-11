import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance, networkTranslate } from '../../network';
import { currentComics, maxId, setCurrentComics, setMaxId } from '../../utils/xkcdApi';

export const postTranslateText = createAsyncThunk(
    '/translate',
    async (source: { text: string; lang: string }, { rejectWithValue }) => {
        try {
            const responce = await networkTranslate.post(
                `?q=${source.text}&target=${source.lang}&source=auto&api_key=`,
            );

            return responce.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
