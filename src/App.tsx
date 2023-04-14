import React, { useEffect, useState } from 'react';
import './App.css';
import { getComics, Comics } from './services/fetch';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
    let title: string = '';
    let img: string = '';

    const [comics, setComics] = useState<Comics | null>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getComics().then((result) => {
            setComics(result);
        });
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
            <Footer />
        </div>
    );
}

export default App;
