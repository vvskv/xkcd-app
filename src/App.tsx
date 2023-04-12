import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getComics } from './services/fetch';

function App() {
    // console.log('app work');
    // const [comics, setComics] = useState({});
    useEffect(() => {
        console.log('effect work');
        const result = getComics();
        console.log(result);
        // setComics(result);
    });
    // console.log(comics);

    // getComics();
    // console.log(getComics());

    return <div></div>;
}

export default App;
