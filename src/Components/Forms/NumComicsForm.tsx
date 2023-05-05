import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getComics } from '../../store/comics/request';

export default function NumComicsForm() {
    const dispatch = useDispatch();
    const [comicsNum, setComicsNum] = useState(0);

    const getComicsForNum = (e: React.MouseEvent<HTMLElement>) => {
        dispatch(getComics(String(comicsNum)));
    };
    // const handleChangeFieldForm = useCallback(
    //     (fieldName: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    //         setComicsNum((prevValues) => ({ ...prevValues, [fieldName]: e.target.value }));
    //     },
    //     [],
    //   );
    const handlerForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const number = Number(event.target.value);
        setComicsNum(number);
    };
    return (
        <>
            <input type="number" name="numOfComics" id="" onChange={handlerForm} />
            <button onClick={getComicsForNum}>Show</button>
        </>
    );
}
