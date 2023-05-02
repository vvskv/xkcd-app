import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getComicsIsLoading,
    getComicsIsSuccess,
    getComicsSelector,
    getComicsIsError,
} from '../../store/comics/selector';
import { getComics } from '../../store/comics/request';
import getJsonId, { comicsRequest, statusPrevRequest } from '../../utils/xkcdApi';
import styles from './MainPage.module.scss';
import randomButton from '../../Components/Buttons/randomButton';
import nextButton from '../../Components/Buttons/nextButton';
import { getNextReqtStatus } from '../../store/nextRequest/selector';

export default function MainPage() {
    const dispatch = useDispatch();
    const comics = useSelector(getComicsSelector);
    const isSuccess = useSelector(getComicsIsSuccess);
    const isError = useSelector(getComicsIsError);
    const isLoading = useSelector(getComicsIsLoading);
    // const reqNextStatus = useSelector(getNextReqtStatus);

    useEffect(() => {
        console.log('First dispatch');
        dispatch(getComics(getJsonId(comicsRequest.Current)));
    }, []);

    // const getNextComics = (e: React.MouseEvent<HTMLElement>) => {
    //     e.preventDefault();
    //     const jsonId = getJsonId(comicsRequest.Next);
    // };
    const getPrevComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const jsonId = getJsonId(comicsRequest.Prev);
        if (statusPrevRequest) dispatch(getComics(jsonId));
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
                        {/* <button onClick={getRandomComics}>Random</button> */}
                        {randomButton()}
                        {/* <button onClick={getNextComics}>Next</button> */}
                        {/* {nextButton(true)} */}
                    </div>
                </div>
            )}
        </>
    );
}
