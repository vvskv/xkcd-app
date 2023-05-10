import React from 'react';
import styles from './Footer.module.scss';
import { currentComics } from '../../utils/xkcdApi';
import { useSelector } from 'react-redux';
import {
    getComicsIsError,
    getComicsIsLoading,
    getComicsIsSuccess,
    getComicsSelector,
} from '../../store/comics/selector';

export default function Footer() {
    // console.log(currentComics);
    const comics = useSelector(getComicsSelector);
    const isSuccess = useSelector(getComicsIsSuccess);
    const isError = useSelector(getComicsIsError);
    const isLoading = useSelector(getComicsIsLoading);

    return (
        <div className={styles.footer}>
            {isError && <span>Error</span>}
            {isLoading && <span>Loading...</span>}
            {isSuccess && comics && <span>{comics.num}</span>}
            <p>All right reserved</p>
        </div>
    );
}
