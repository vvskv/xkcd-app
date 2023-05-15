import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkTranslate } from '../../network';

export const postTranslateText = createAsyncThunk(
    '/translate',
    async (source: { text: string; lang: string }, { rejectWithValue }) => {
        try {
            const responce = await networkTranslate.post('translate', {
                source_language: 'en',
                text: encodeURI(source.text),
                target_language: source.lang,
            });

            return responce.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
