import React, { useState } from 'react';
import { postTranslateText } from '../../store/translator/request';
import { useDispatch } from 'react-redux';
import styles from './TranslateForm.module.scss';
import { addToArrOfReq, clearArrOfReq } from '../../store/arrTranReq';
import { clearArrOfRes } from '../../store/translator';

export default function TranslateForm() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handlerButton = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(postTranslateText({ text: text, lang: 'ru' }));
        dispatch(addToArrOfReq({ req: [text] }));
    };
    const handlerForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setText(text);
    };
    const handleBtnClear = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(clearArrOfReq());
        dispatch(clearArrOfRes());
    };
    const clearForm = () => {
        setText('');
    };

    return (
        <div className={styles.wrap}>
            <form action="submit">
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={handlerForm}
                    onFocus={clearForm}
                    value={text}
                    onMouseOut={blur}
                />
                <button type="submit" onClick={handlerButton} disabled={text === ''}>
                    Translate
                </button>
                <button onClick={handleBtnClear}>Clear</button>
            </form>
        </div>
    );
}
