import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../network';

export enum comicsId {
    Random = 'RANDOM',
    Prev = 'PREV',
    Next = 'NEXT',
    Current = 'CURRENT',
}

let maxCount = 0;
let currentComics = 0;

export const getComics = createAsyncThunk('/comics', async (id: comicsId, { rejectWithValue }) => {
    let jsonId: string;
    switch (id) {
        case comicsId.Random:
            jsonId = String(Math.ceil(Math.random() * maxCount));
            break;
        case comicsId.Prev:
            jsonId = String(currentComics - 1);
            break;
        case comicsId.Next:
            jsonId = String(currentComics + 1);
            break;
        case comicsId.Current:
            jsonId = !currentComics ? '' : String(currentComics);
            break;
    }

    try {
        const responce = await networkInstance.get(`${jsonId}/info.0.json`);
        if (maxCount === 0 && id === comicsId.Current) {
            maxCount = responce.data.num;
        } else {
            maxCount = 2767;
        }
        currentComics = responce.data.num;
        return responce.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
