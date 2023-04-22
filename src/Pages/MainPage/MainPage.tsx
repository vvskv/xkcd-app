import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getComicsIsLoading,
    getComicsIsSuccess,
    getComicsSelector,
    getComicsIsError,
} from '../../store/comics/selector';
import { getComics } from '../../store/comics/request';

export default function MainPage() {
    const dispatch = useDispatch();
    const comics = useSelector(getComicsSelector);
    const isSuccess = useSelector(getComicsIsSuccess);
    const isError = useSelector(getComicsIsError);
    const isLoading = useSelector(getComicsIsLoading);
    let currentComics = '';

    // console.log(curComics);
    useEffect(() => {
        currentComics = JSON.parse(window.localStorage.getItem('number') || '');
        console.log('First dispatch');
        dispatch(getComics(currentComics));
    }, []);

    const getRandomComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        currentComics = '100';
        window.localStorage.setItem('number', JSON.stringify(currentComics));
        dispatch(getComics(currentComics));
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
                </div>
            )}
        </>
    );
}
