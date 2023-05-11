import axios from 'axios';

export const networkInstance = axios.create({ baseURL: 'https://xkcd.com', timeout: 10000 });
export const networkTranslate = axios.create({
    baseURL: 'https://text-translator2.p.rapidapi.com',
    timeout: 10000,
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '8c20416f41msh852d6f89b80fbb4p165a98jsn6a3da25da47a',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
});
// http://translate.google.ru/translate_a/t?client=x&text={textToTranslate}&hl=en&sl=en&tl=ru
