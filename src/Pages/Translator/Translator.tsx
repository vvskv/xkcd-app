import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTranslateText } from '../../store/translator/selector';
import { postTranslateText } from '../../store/translator/request';

export default function Translator() {
    const dispatch = useDispatch();
    const translateText = useSelector(getTranslateText);
    useEffect(() => {
        dispatch(postTranslateText({ text: 'Hello', lang: '' }));
    }, []);
    console.log(translateText);

    return (
        <div>
            <form action="submit">
                <input type="text" name="" id="" />
                <button type="submit">Перевод</button>
            </form>
        </div>
    );
}
