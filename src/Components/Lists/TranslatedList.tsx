import React from 'react';
import { useSelector } from 'react-redux';
import { getTranslateArrResponce } from '../../store/translator/selector';
import styles from './TranslatedList.module.scss';
import { getTranslateArrRequest } from '../../store/arrTranReq/selector';

export function addWordToArr() {}
export default function TranslatedList() {
    const requestArr = useSelector(getTranslateArrRequest);
    const responceArr = useSelector(getTranslateArrResponce);
    const reqArrReverce = [...requestArr].reverse();
    const resArrReverce = [...responceArr].reverse();

    return (
        <div className={styles.wrap}>
            <div className={styles.list}>
                {reqArrReverce.map((word, index) => {
                    return <p key={index}>{word}</p>;
                })}
            </div>
            <div className={styles.list}>
                {resArrReverce.map((word, index) => {
                    return <p key={index}>{word}</p>;
                })}
            </div>
        </div>
    );
}
