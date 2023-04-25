export enum comicsId {
    Random = 'RANDOM',
    Prev = 'PREV',
    Next = 'NEXT',
    Current = 'CURRENT',
}

let maxCount = 0;
let currentComics = 0;

export default function getJsonId(id: comicsId) {
    let jsonId: string;
    switch (id) {
        case comicsId.Random:
            jsonId = String(Math.ceil(Math.random() * maxCount));
            break;
        case comicsId.Prev:
            jsonId = String(currentComics - 1);
            break;
        case comicsId.Next:
            jsonId = String(currentComics + 1);
            break;
        case comicsId.Current:
            jsonId = !currentComics ? '' : String(currentComics);
            break;
    }
    return jsonId;
}
