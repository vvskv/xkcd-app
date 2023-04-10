import React from 'react';

export default async function getData() {
    const url = 'https://xkcd.com/614/info.0.json';
    const url2 = 'https://jsonplaceholder.typicode.com/todos/1';
    const data = await fetch(url);
    return await data.json();
}
