import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance, networkTranslate } from '../../network';
import { currentComics, maxId, setCurrentComics, setMaxId } from '../../utils/xkcdApi';

export const postTranslateText = createAsyncThunk(
    '/translate',
    async (source: { text: string; lang: string }, { rejectWithValue }) => {
        try {
            const responce = await networkTranslate.post(
                'translate',
                {
                    source_language: 'en',
                    text: encodeURI(source.text),
                    target_language: source.lang,
                },
                // `translate?source_language=en&text=${encodeURI(source.text)}&target_language=${
                //     source.lang
                // }`,
                //                 ncodedParams.set('source_language', 'en');
                // encodedParams.set('target_language', 'id');
                // encodedParams.set('text', 'What is your name?');
                // `single?client=gtx&sl=en&tl=${source.lang}&dt=t&q=${encodeURI(source.text)}`,
                // text=Hello%2C%20world!&target_lang=DE
                // http://translate.google.ru/translate_a/t?client=x&text={textToTranslate}&hl=en&sl=en&tl=ru
            );

            return responce.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

// 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
//     sourceLang +
//     '&tl=' +
//     targetLang +
//     '&dt=t&q=' +
//     encodeURI(sourceText);
