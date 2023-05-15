import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComics } from '../../store/comics/request';
import styles from './NumComicsForm.module.scss';
import { getComicsSelector, getComicsIsSuccess } from '../../store/comics/selector';
import getJsonId, { maxId } from '../../utils/xkcdApi';

export default function NumComicsForm() {
    const dispatch = useDispatch();
    const [comicsNum, setComicsNum] = useState(0);
    const comics = useSelector(getComicsSelector);
    const isSuccess = useSelector(getComicsIsSuccess);

    const handlerButton = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const jsonId = getJsonId(comicsNum);
        if (comicsNum > 0 && comicsNum <= maxId) dispatch(getComics(jsonId));
    };
    const handlerForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const number = Number(event.target.value);
        setComicsNum(number);
    };
    const clearForm = () => {
        setComicsNum(0);
    };
    useEffect(() => {
        if (isSuccess && comicsNum === 0) setComicsNum(comics.num);
    }, []);

    return (
        <>
            <div className={styles.wrap}>
                <p>Comics ID:</p>
                <input
                    type="number"
                    name="numOfComics"
                    id=""
                    onChange={handlerForm}
                    value={comicsNum || ''}
                    onFocus={clearForm}
                />
                <button onClick={handlerButton}>Show</button>
            </div>
        </>
    );
}
