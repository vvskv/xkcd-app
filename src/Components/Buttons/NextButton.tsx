import React from 'react';
import getJsonId, { comicsRequest, statusNextRequest } from '../../utils/xkcdApi';
import { getComics } from '../../store/comics/request';
import { useDispatch } from 'react-redux';

export default function NextButton() {
    const dispatch = useDispatch();

    const getNextComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const jsonId = getJsonId(comicsRequest.Next);
        dispatch(getComics(jsonId));
    };
    return (
        <button disabled={!statusNextRequest} onClick={getNextComics}>
            Next
        </button>
    );
}
