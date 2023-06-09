import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export enum comicsRequest {
    Random = 'RANDOM',
    Prev = 'PREV',
    Next = 'NEXT',
    Current = 'CURRENT',
}

export let maxId = Number(localStorage.getItem('maxID'));
export let currentComics = 0;
export let statusNextRequest = true;
export let statusPrevRequest = true;

export function setMaxId(id: number) {
    maxId = id;
}
export function setCurrentComics(id: number) {
    currentComics = id;
}

export default function getJsonId(req: comicsRequest | number) {
    currentComics = Number(localStorage.getItem('currentID'));
    let jsonId: string;
    if (typeof req !== 'number') {
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
                jsonId = !currentComics ? 'latest' : String(currentComics);
                break;
        }
    } else {
        currentComics = req;
        jsonId = String(req);
    }
    // console.log(currentComics);

    if (currentComics === 1) {
        statusPrevRequest = false;
        statusNextRequest = true;
    } else if (currentComics === maxId) {
        statusNextRequest = false;
        statusPrevRequest = true;
    } else {
        statusNextRequest = true;
        statusPrevRequest = true;
    }

    return jsonId;
}
