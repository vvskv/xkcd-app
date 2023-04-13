import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getComics } from './services/fetch';
import { type } from 'os';

function App() {
    const [comics, setComics] = useState({});
    useEffect(() => {
        getComics().then((result) => {
            // let resultComics: Comics = JSON.parse(result);
            // console.log(resultComics.alt);
            // setComics(resultComics);
            console.log(result.img);

            setComics(result);
        });
    }, []);
    // const test : Comics = <Comics>result;
    // const test = JSON.parse(comics);
    // const test = JSON.stringify(comics);
    // const test2 : Comics = JSON.parse(test);
    // console.log(JSON.stringify(test2));
    // console.log(comics.alt);

    return <div>{/* <p>{comics.num}</p> */}</div>;
}

export default App;
