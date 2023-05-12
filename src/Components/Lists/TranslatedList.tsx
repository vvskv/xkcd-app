import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTranslateText, getTranslateIsSuccess } from '../../store/translator/selector';
import { getArrSource, getArrTranslated } from '../../store/text/selector';
import { addToArr } from '../../store/text';

export default function TranslatedList() {
    const dispatch = useDispatch();
    const sourceArr = useSelector(getArrSource);
    const translatedArr = useSelector(getArrTranslated);
    const textResponce = useSelector(getTranslateText);
    const isSuccess = useSelector(getTranslateIsSuccess);
    if (isSuccess) {
        dispatch(addToArr({ source: [], translated: [textResponce.data.translatedText] }));
    }
    return <></>;
}
