import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getComics } from './services/fetch';
import { type } from 'os';

type Comics = {
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
};
function App() {
    // console.log('app work');
    const [comics, setComics] = useState({});
    useEffect(() => {
        getComics().then((result) => {
            // let resultComics: Comics = JSON.parse(result);
            // console.log(resultComics.alt);
            // setComics(resultComics);
            setComics(result);
        });
    });
    // const test : Comics = JSON.parse(comics);
    console.log(comics);
    // console.log(comics.alt);

    return <div>{/* <p>{comics.num}</p> */}</div>;
}

export default App;
