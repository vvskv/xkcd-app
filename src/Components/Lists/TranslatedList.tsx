import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArrSource, getArrTranslated } from '../../store/arrTranReq/selector';
import {
    getTranslateIsLoading,
    getTranslateIsSuccess,
    getTranslateText,
} from '../../store/translatorRequest/selector';
import { addToArr } from '../../store/arrTranReq';
import styles from './TranslatedList.module.scss';

export function addWordToArr() {}
export default function TranslatedList() {
    const dispatch = useDispatch();
    const sourceArr = useSelector(getArrSource);
    const translatedArr = useSelector(getArrTranslated);
    const textResponce = useSelector(getTranslateText);
    const isSuccess = useSelector(getTranslateIsSuccess);
    const isLoading = useSelector(getTranslateIsLoading);
    const memoTextResponce = useMemo(() => textResponce, [textResponce]);

    useEffect(() => {
        if (isSuccess) {
            console.log('useEffect');

            dispatch(
                addToArr({ source: [], translated: [String(textResponce.data.translatedText)] }),
            );
        }
    }, []);
    return (
        <div className={styles.wrap}>
            <div className={styles.list}>
                {sourceArr.map((word, index) => {
                    return <p key={index}>{word}</p>;
                })}
            </div>
            <div className={styles.list}>
                {translatedArr.map((word, index) => {
                    return <p key={index}>{word}</p>;
                })}
            </div>
        </div>
    );
}
