import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComics } from '../../store/comics/request';
import getJsonId from '../../utils/xkcdApi';
import styles from './NumComicsForm.module.scss';
import {
    getComicsSelector,
    getComicsIsSuccess,
    getComicsIsError,
    getComicsIsLoading,
} from '../../store/comics/selector';

export default function NumComicsForm() {
    const dispatch = useDispatch();
    const [comicsNum, setComicsNum] = useState(0);
    const comics = useSelector(getComicsSelector);
    const isSuccess = useSelector(getComicsIsSuccess);
    const isError = useSelector(getComicsIsError);
    const isLoading = useSelector(getComicsIsLoading);

    const getComicsForNum = (e: React.MouseEvent<HTMLElement>) => {
        const jsonId = getJsonId(comicsNum);
        dispatch(getComics(jsonId));
        // dispatch(getComics(String(comicsNum)));
    };
    const handlerForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const number = Number(event.target.value);
        setComicsNum(number);
    };
    const clearForm = () => {
        setComicsNum(0);
    };
    // useEffect(() => {
    //     if (isSuccess) setComicsNum(comics.num);
    // });
    // setComicsNum(comics.num);
    // if (isSuccess) setComicsNum(comics.num);
    console.log(comicsNum);

    return (
        <>
            <div className={styles.wrap}>
                <input
                    type="number"
                    name="numOfComics"
                    id=""
                    onChange={handlerForm}
                    // value={isSuccess && comics && comics.num}
                    value={comicsNum}
                    // onFocus={(value = '')}
                    onClick={clearForm}
                />
                <button onClick={getComicsForNum}>Show</button>
            </div>
        </>
    );
}
