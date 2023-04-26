import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getComicsIsLoading,
    getComicsIsSuccess,
    getComicsSelector,
    getComicsIsError,
} from '../../store/comics/selector';
import { getComics } from '../../store/comics/request';
import getJsonId, { comicsRequest, statusRequest } from '../../utils/getJsonId';
import styles from './MainPage.module.scss';

export default function MainPage() {
    const dispatch = useDispatch();
    const comics = useSelector(getComicsSelector);
    const isSuccess = useSelector(getComicsIsSuccess);
    const isError = useSelector(getComicsIsError);
    const isLoading = useSelector(getComicsIsLoading);

    useEffect(() => {
        console.log('First dispatch');
        dispatch(getComics(getJsonId(comicsRequest.Current)));
    }, []);

    const getRandomComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(getComics(getJsonId(comicsRequest.Random)));
    };
    const getNextComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const jsonId = getJsonId(comicsRequest.Next);
        if (statusRequest) dispatch(getComics(jsonId));
    };
    const getPrevComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const jsonId = getJsonId(comicsRequest.Prev);
        if (statusRequest) dispatch(getComics(jsonId));
    };

    return (
        <>
            {isError && <span>Error</span>}
            {isLoading && <span>Loading...</span>}
            {isSuccess && comics && (
                <div className={styles.content}>
                    <h1>{comics.title}</h1>
                    <img src={comics.img} alt="" />
                    <div className={styles.buttonsBlock}>
                        <button onClick={getPrevComics}>Prev</button>
                        <button onClick={getRandomComics}>Random</button>
                        <button onClick={getNextComics}>Next</button>
                    </div>
                </div>
            )}
        </>
    );
}
