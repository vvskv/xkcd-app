import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../network';

export const getComics = createAsyncThunk('/comics', async (id: string, { rejectWithValue }) => {
    try {
        const responce = await networkInstance.get(`${id}/info.0.json`);
        // console.log(responce);
        return responce.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
