import React from 'react';
import getJsonId, {
    comicsRequest,
    statusNextRequest,
    statusPrevRequest,
} from '../../utils/xkcdApi';
import { getComics } from '../../store/comics/request';
import { useDispatch } from 'react-redux';

export default function PrevButton() {
    const dispatch = useDispatch();

    const getPrevComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const jsonId = getJsonId(comicsRequest.Prev);
        dispatch(getComics(jsonId));
    };
    return (
        <button disabled={!statusPrevRequest} onClick={getPrevComics}>
            Prev
        </button>
    );
}
