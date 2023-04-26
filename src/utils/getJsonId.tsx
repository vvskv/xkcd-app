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

export default function getJsonId(req: comicsRequest) {
    let jsonId: string;
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
