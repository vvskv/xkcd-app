import React from 'react';

export async function getComics() {
    const url = 'https://xkcd.com/614/info.0.json';
    // const url2 = 'https://jsonplaceholder.typicode.com/todos/1';
    const responce = await fetch(url);
    if (responce.ok) {
        const comics = await responce.json();
        return comics;
    } else {
        const errMessage = `Error: ${responce.status}`;
        throw new Error(errMessage);
    }
    // console.log(comics);

    // return comics;
}
