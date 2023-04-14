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

let maxComicsId: number;
let curComicsId: number;

export async function getComicsRequest(req?: string): Promise<Comics> {
    let url = 'https://xkcd.com/';
    if (req) {
        if (req === 'random') {
            const num = Math.ceil(Math.random() * maxComicsId);
            url += num + '/info.0.json';
        }
        if (req === 'next') {
            const num = curComicsId + 1;
            url += num + '/info.0.json';
        }
    } else {
        url += '/info.0.json';
    }

    const responce = await fetch(url);
    if (responce.ok) {
        const comics = (await responce.json()) as Comics;
        if (!maxComicsId) maxComicsId = comics.num;
        curComicsId = comics.num;
        return comics;
    } else {
        const errMessage = `Error: ${responce.status}`;
        throw new Error(errMessage);
    }
}
