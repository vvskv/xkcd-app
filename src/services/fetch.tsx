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

export type TRequest = {
    value: string;
};
let curComicsId: number = 2762;

export async function getComics(req ?: TRequest): Promise<Comics> {
    const baseUrl = 'https://xkcd.com/';
    if(req) {
        if(req.value === 'random'){

        }
    } else {
        
    }
    
    // const url = 'https://xkcd.com/614/info.0.json';
    const responce = await fetch(baseUrl + curComicsId + '/info.0.json');
    if (responce.ok) {
        const comics = (await responce.json()) as Comics;
        return comics;
    } else {
        const errMessage = `Error: ${responce.status}`;
        throw new Error(errMessage);
    }
}
