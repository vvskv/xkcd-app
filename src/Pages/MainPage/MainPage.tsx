import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getComicsIsLoading,
    getComicsIsSuccess,
    getComicsSelector,
    getComicsIsError,
} from '../../store/comics/selector';
import { getComics } from '../../store/comics/request';
import getJsonId, { comicsRequest } from '../../utils/xkcdApi';
import styles from './MainPage.module.scss';
import RandomButton from '../../Components/Buttons/RandomButton';
import NextButton from '../../Components/Buttons/NextButton';
import PrevButton from '../../Components/Buttons/PrevButton';
import NumComicsForm from '../../Components/Forms/NumComicsForm';

export default function MainPage() {
    const dispatch = useDispatch();
    const comics = useSelector(getComicsSelector);
    const isSuccess = useSelector(getComicsIsSuccess);
    const isError = useSelector(getComicsIsError);
    const isLoading = useSelector(getComicsIsLoading);

    useEffect(() => {
        if (!comics) dispatch(getComics(getJsonId(comicsRequest.Current)));
    }, []);

    return (
        <>
            {isError && <span>Error</span>}
            {isLoading && <span>Loading...</span>}
            {isSuccess && comics && (
                <div className={styles.content}>
                    <h1>{comics.title}</h1>
                    <img src={comics.img} alt="" />
                    <div className={styles.buttonsBlock}>
                        <PrevButton />
                        <RandomButton />
                        <NextButton />
                    </div>
                    <NumComicsForm />
                </div>
            )}
        </>
    );
}
