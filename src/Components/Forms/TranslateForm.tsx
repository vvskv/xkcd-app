import React, { useState } from 'react';
import { postTranslateText } from '../../store/translator/request';
import { useDispatch } from 'react-redux';

export default function TranslateForm() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const handlerButton = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(postTranslateText({ text: text, lang: 'ru' }));
    };
    const handlerForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setText(text);
    };
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
