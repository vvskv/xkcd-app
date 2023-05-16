import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../network';
import { currentComics, setCurrentComics, setMaxId } from '../../utils/xkcdApi';

export const getComics = createAsyncThunk(
    '/comics',
    async (jsonId: string, { rejectWithValue }) => {
        try {
            const responce = await networkInstance.get(`?comic=${jsonId}`);

            if (jsonId === 'latest') {
                localStorage.setItem('maxID', String(responce.data.num));
                // console.log('!!!');
                setMaxId(responce.data.num);
            }

            if (currentComics === 0) setCurrentComics(responce.data.num);
            localStorage.setItem('currentID', String(responce.data.num));

            return responce.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
