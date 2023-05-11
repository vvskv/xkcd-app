import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTranslateIsSuccess, getTranslateText } from '../../store/translator/selector';
import { postTranslateText } from '../../store/translator/request';

// interface ITText {
//     data: {};
//     status: String;
// }
export default function Translator() {
    const dispatch = useDispatch();
    const translatedText = useSelector(getTranslateText);
    const translateIsSuccess = useSelector(getTranslateIsSuccess);
    useEffect(() => {
        dispatch(postTranslateText({ text: 'Hello', lang: 'ru' }));
    }, []);
    console.log(translatedText);
    console.log(translateIsSuccess);

    return (
        <div>
            <form action="submit">
                <input type="text" name="" id="" />
                <button type="submit">Перевод</button>
            </form>
        </div>
    );
}
