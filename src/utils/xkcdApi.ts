import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCurrentNumber } from '../store/currentNumber';

export enum comicsRequest {
    Random = 'RANDOM',
    Prev = 'PREV',
    Next = 'NEXT',
    Current = 'CURRENT',
}

export let maxId = 0;
export let currentComics = 0;
export let statusNextRequest = true;
export let statusPrevRequest = true;

export function setMaxId(id: number) {
    maxId = id;
}
export function setCurrentComics(id: number) {
    currentComics = id;
}
// add current id comics to local storage

export default function getJsonId(req: comicsRequest) {
    const dispatch = useDispatch();
    dispatch(setCurrentNumber({ num: currentComics }));
    let jsonId: string;
    switch (req) {
        case comicsRequest.Random:
            currentComics = Math.ceil(Math.random() * maxId);
            jsonId = String(currentComics);
            break;
        case comicsRequest.Prev:
            currentComics -= 1;
            jsonId = String(currentComics);
            break;
        case comicsRequest.Next:
            currentComics += 1;
            jsonId = String(currentComics);
            break;
        case comicsRequest.Current:
            jsonId = !currentComics ? '' : String(currentComics);
            break;
    }
    // console.log(currentComics);

    if (currentComics === 1) {
        statusPrevRequest = false;
    } else if (currentComics === maxId) {
        statusNextRequest = false;
    } else {
        statusNextRequest = true;
        statusPrevRequest = true;
    }
    // console.log(statusNextRequest);

    return jsonId;
}
