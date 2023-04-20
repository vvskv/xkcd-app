import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getComicsIsLoading,
    getComicsIsSuccess,
    getComicsSelector,
    getComicsisError,
} from '../../store/comics/selector';
import { getComics } from '../../store/comics/request';

export default function MainPage() {
    const dispatch = useDispatch();
    const comics = useSelector(getComicsSelector);
    const isSuccess = useSelector(getComicsIsSuccess);
    const isError = useSelector(getComicsisError);
    const isLoading = useSelector(getComicsIsLoading);
    const [curComics, setCurComics] = useState('');
    console.log(curComics);
    useEffect(() => {
        console.log('First dispatch');
        dispatch(getComics(curComics));
    }, []);

    const getRandomComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setCurComics('100');
        // dispatch(getComics('100'));
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
