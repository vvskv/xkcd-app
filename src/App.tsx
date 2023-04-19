import React, { useEffect, useState } from 'react';
import './App.css';
import { getComicsRequest, Comics } from './services/fetch';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getComics } from './store/comics/request';
import {
    getComicsIsLoading,
    getComicsIsSuccess,
    getComicsSelector,
    getComicsisError,
} from './store/comics/selector';

function App() {
    // function getComics(req?: string) {
    //     getComicsRequest(req).then((result) => {
    //         setComics(result);
    //     });
    // }

    // const getRandomComics = (e: React.MouseEvent<HTMLElement>) => {
    //     e.preventDefault();
    //     getComics('random');
    // };
    // const getNextComics = (e: React.MouseEvent<HTMLElement>) => {
    //     e.preventDefault();
    //     getComics('next');
    // };

    // let title: string = '';
    // let img: string = '';

    // const [comics, setComics] = useState<Comics | null>(null);
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     getComics();
    // }, []);
    // if (comics) {
    //     title = comics.title;
    //     img = comics.img;
    // }

    // return (
    //     <div>
    //         <Header />
    //         <h1>{title}</h1>
    //         <img src={img} alt="" />
    //         <button onClick={getRandomComics}>Random</button>
    //         <button onClick={getNextComics}>Next</button>
    //         <Footer />
    //     </div>
    // );
    const dispatch = useDispatch();
    const comics = useSelector(getComicsSelector);
    const isSuccess = useSelector(getComicsIsSuccess);
    const isError = useSelector(getComicsisError);
    const isLoading = useSelector(getComicsIsLoading);

    interface IComics {
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
    useEffect(() => {
        dispatch(getComics(''));
    }, []);
    console.log(comics);

    return (
        <>
            {isError && <span>Error</span>}
            {isLoading && <span>Loading...</span>}
            {isSuccess && comics && (
                <div>
                    <p>{comics.title}</p>
                    <img src={comics.img} alt="" />
                </div>
            )}
        </>
    );
}

export default App;
