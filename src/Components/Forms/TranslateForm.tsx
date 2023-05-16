import React, { useState } from 'react';
import { postTranslateText } from '../../store/translatorRequest/request';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TranslateForm.module.scss';
import { addToArr } from '../../store/arrTranReq';
import { getTranslateIsSuccess, getTranslateText } from '../../store/translatorRequest/selector';

export default function TranslateForm() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handlerButton = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(postTranslateText({ text: text, lang: 'ru' }));
        dispatch(addToArr({ source: [text], translated: [] }));
    };
    const handlerForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setText(text);
    };

    return (
        <div className={styles.wrap}>
            <form action="submit">
                <input type="text" name="" id="" onChange={handlerForm} />
                <button type="submit" onClick={handlerButton}>
                    Translate
                </button>
            </form>
        </div>
    );
}
