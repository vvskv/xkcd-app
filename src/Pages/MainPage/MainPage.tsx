import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getComicsIsLoading,
    getComicsIsSuccess,
    getComicsSelector,
    getComicsIsError,
} from '../../store/comics/selector';
import { comicsId, getComics } from '../../store/comics/request';

export default function MainPage() {
    const dispatch = useDispatch();
    const comics = useSelector(getComicsSelector);
    const isSuccess = useSelector(getComicsIsSuccess);
    const isError = useSelector(getComicsIsError);
    const isLoading = useSelector(getComicsIsLoading);
    // let currentComics = comicsId.Last;

    useEffect(() => {
        // if (window.localStorage.getItem('curComics')) {
        //     currentComics = JSON.parse(window.localStorage.getItem('curComics') || '');
        // }
        console.log('First dispatch');
        // dispatch(getComics(currentComics));
        dispatch(getComics(comicsId.Current));
    }, []);

    const getRandomComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(getComics(comicsId.Random));
    };
    const getNextComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(getComics(comicsId.Next));
    };
    const getPrevComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(getComics(comicsId.Prev));
    };

    return (
        <>
            <p>MainPage</p>
            {isError && <span>Error</span>}
            {isLoading && <span>Loading...</span>}
            {isSuccess && comics && (
                <div>
                    <p>{comics.title}</p>
                    <img src={comics.img} alt="" />
                    <button onClick={getRandomComics}>Random</button>
                    <button onClick={getNextComics}>Next</button>
                    <button onClick={getPrevComics}>Prev</button>
                </div>
            )}
        </>
    );
}
