import axios from 'axios';

export const networkInstance = axios.create({ baseURL: 'https://xkcd.com', timeout: 10000 });
export const networkTranslate = axios.create({
    baseURL: 'https://libretranslate.com/translate/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
