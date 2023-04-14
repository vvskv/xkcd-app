import React, { useEffect, useState } from 'react';
import './App.css';
import { getComicsRequest, Comics } from './services/fetch';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
    function getComics(req?: string) {
        getComicsRequest(req).then((result) => {
            setComics(result);
        });
    }

    const getRandomComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        getComics('random');
    };
    const getNextComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        getComics('next');
    };

    let title: string = '';
    let img: string = '';

    const [comics, setComics] = useState<Comics | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getComics();
        // getComicsRequest('random').then((result) => {
        //     setComics(result);
        // });
    }, []);
    if (comics) {
        title = comics.title;
        img = comics.img;
    }

    return (
        <div>
            <Header />
            <h1>{title}</h1>
            <img src={img} alt="" />
            <button onClick={getRandomComics}>Random</button>
            <button onClick={getNextComics}>Next</button>
            <Footer />
        </div>
    );
}

export default App;
