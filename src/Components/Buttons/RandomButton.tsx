import React from 'react';
import { useDispatch } from 'react-redux';
import { getComics } from '../../store/comics/request';
import getJsonId, { comicsRequest } from '../../utils/xkcdApi';

export default function RandomButton() {
    const dispatch = useDispatch();

    const getRandomComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(getComics(getJsonId(comicsRequest.Random)));
    };
    return <button onClick={getRandomComics}>Random</button>;
}
