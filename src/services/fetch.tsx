import React from 'react';

export interface Comics {
    alt: string;
    day: string;
    img: string;
    link: string;
    month: string;
    news: string;
    num: number;
    safeTitle: string;
    title: string;
    transcript: string;
    year: string;
}

export async function getComics() : Promise<Comics> {
    const url = 'https://xkcd.com/614/info.0.json';
    // const url2 = 'https://jsonplaceholder.typicode.com/todos/1';
    const responce = await fetch(url);
    if (responce.ok) {
        const comics = (await responce.json()) as Comics;
        return comics;
    } else {
        const errMessage = `Error: ${responce.status}`;
        throw new Error(errMessage);
    }
    // console.log(comics);

    // return comics;
}
