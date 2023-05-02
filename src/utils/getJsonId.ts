import { useDispatch } from 'react-redux';
import { setRequestsStatus } from '../store/requests';
import { useEffect } from 'react';

export enum comicsRequest {
    Random = 'RANDOM',
    Prev = 'PREV',
    Next = 'NEXT',
    Current = 'CURRENT',
}

export let maxId = 0;
export let currentComics = 0;
export let statusRequest = true;

export function setMaxId(id: number) {
    maxId = id;
}
export function setCurrentComics(id: number) {
    currentComics = id;
}
// add current id comics to local storage

export default function getJsonId(req: comicsRequest) {
    let jsonId: string;
    
    // setRequestsStatus({ reqNext: { status: true }, reqPrev: { status: true } });
    // useEffect(() => {
    //     if (currentComics === 1) {
    //         dispatch(setRequestsStatus({ reqNext: { status: true }, reqPrev: { status: false } }));
    //     } else if (currentComics === maxId) {
    //         dispatch(setRequestsStatus({ reqNext: { status: false }, reqPrev: { status: true } }));
    //     }
    // }, []);
    // const dispatch = useDispatch();

    switch (req) {
        case comicsRequest.Random:
            currentComics = Math.ceil(Math.random() * maxId);
            jsonId = String(currentComics);
            statusRequest = true;
            break;
        case comicsRequest.Prev:
            if (currentComics === 1) {
                jsonId = String(currentComics);
                statusRequest = false;
            } else {
                currentComics -= 1;
                jsonId = String(currentComics);
                statusRequest = true;
            }
            break;
        case comicsRequest.Next:
            if (currentComics === maxId) {
                jsonId = String(currentComics);
                statusRequest = false;
            } else {
                currentComics += 1;
                jsonId = String(currentComics);
                statusRequest = true;
            }
            break;
        case comicsRequest.Current:
            jsonId = !currentComics ? '' : String(currentComics);
            statusRequest = true;
            break;
    }
    return jsonId;
}
