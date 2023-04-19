import React, { useEffect } from 'react';
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

    // interface IComics {
    //     alt: string;
    //     day: string;
    //     img: string;
    //     link: string;
    //     month: string;
    //     news: string;
    //     num: number;
    //     safeTitle: string;
    //     title: string;
    //     transcript: string;
    //     year: string;
    // }
    useEffect(() => {
        dispatch(getComics(''));
    }, []);

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
