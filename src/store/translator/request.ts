import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../network';
import { currentComics, maxId, setCurrentComics, setMaxId } from '../../utils/xkcdApi';

export const getTranslateText = createAsyncThunk(
    '/translate',
    async (body: string, { rejectWithValue }) => {
        try {
            const responce = await networkInstance.get(`${jsonId}/info.0.json`);

            return responce.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
