import React from 'react';

enum buttonAction {
    Random = 'RANDOM',
    Prev = 'PREV',
    Next = 'NEXT',
}
interface IComicsButtonProps {
    name: string;
    action: buttonAction;
    curComics: number;
}
export default function ComicsButton({ name, action, curComics }: IComicsButtonProps) {
    return (
        <>
            <button>{name}</button>
        </>
    );
}
