import React from 'react';
import getJsonId, { comicsRequest } from '../../utils/xkcdApi';
import { getComics } from '../../store/comics/request';
import { useDispatch } from 'react-redux';

export default function nextButton(state: boolean) {
    const dispatch = useDispatch();

    const getNextComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const jsonId = getJsonId(comicsRequest.Next);
        dispatch(getComics(jsonId));
    };
    return (
        <button disabled={!state} onClick={getNextComics}>
            Next
        </button>
    );
}
