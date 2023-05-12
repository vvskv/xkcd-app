import React, { useState } from 'react';
import { postTranslateText } from '../../store/translator/request';
import { useDispatch, useSelector } from 'react-redux';
import {
    getTranslateIsError,
    getTranslateIsLoading,
    getTranslateIsSuccess,
    getTranslateText,
} from '../../store/translator/selector';
import { addToArr } from '../../store/text';

export default function TranslateForm() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    // let tempText = '';

    const handlerButton = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(postTranslateText({ text: text, lang: 'ru' }));
        // tempText = text;
        dispatch(addToArr({ source: [text], translated: [] }));
    };
    const handlerForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setText(text);
    };

    // if (isSuccess) dispatch(addText({ data: [[textResponce.data.translatedText, tempText]] }));

    return (
        <div>
            <form action="submit">
                <input type="text" name="" id="" onChange={handlerForm} />
                <button type="submit" onClick={handlerButton}>
                    Перевод
                </button>
            </form>
        </div>
    );
}
