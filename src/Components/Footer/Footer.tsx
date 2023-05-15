import React from 'react';
import styles from './Footer.module.scss';
import { useSelector } from 'react-redux';
import {
    getComicsIsError,
    getComicsIsLoading,
    getComicsIsSuccess,
    getComicsSelector,
} from '../../store/comics/selector';
import { maxId } from '../../utils/xkcdApi';

export default function Footer() {
    const comics = useSelector(getComicsSelector);
    const isSuccess = useSelector(getComicsIsSuccess);
    const isError = useSelector(getComicsIsError);
    const isLoading = useSelector(getComicsIsLoading);

    return (
        <div className={styles.footer}>
            <p>Current comics ID:</p>
            {isError && <span>Error</span>}
            {isLoading && <span>Loading...</span>}
            {isSuccess && comics && <span>{comics.num}</span>}
            <p>of</p>
            <p>{maxId}</p>
        </div>
    );
}
