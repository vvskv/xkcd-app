import React from 'react';
import getJsonId, { comicsRequest, statusRequest } from '../../utils/getJsonId';
import { getComics } from '../../store/comics/request';
import { useDispatch } from 'react-redux';
import { setRequestsStatus } from '../../store/requests';
import { getNextReqtStatus } from '../../store/nextRequest/selector';

export default function nextButton() {
    const dispatch = useDispatch();

    const getNextComics = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const jsonId = getJsonId(comicsRequest.Next);
        if (statusRequest) dispatch(getComics(jsonId));
        // dispatch(setRequestsStatus(reqNex))
    };
    return (
        <button disabled={getNextReqtStatus()} onClick={getNextComics}>
            Next
        </button>
    );
}
