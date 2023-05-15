import React from 'react';
import { useSelector } from 'react-redux';
import {
    getTranslateIsError,
    getTranslateIsLoading,
    getTranslateIsSuccess,
    getTranslateText,
} from '../../store/translator/selector';
import TranslateForm from '../../Components/Forms/TranslateForm';
import styles from './Translator.module.scss';

export default function Translator() {
    const textResponce = useSelector(getTranslateText);
    const isSuccess = useSelector(getTranslateIsSuccess);
    const isLoading = useSelector(getTranslateIsLoading);
    const isError = useSelector(getTranslateIsError);

    return (
        <div className={styles.wrap}>
            <TranslateForm />
            <span>{isLoading && 'Loading...'}</span>
            <span>{isError && 'Error'}</span>
            <span>{isSuccess && textResponce.data.translatedText}</span>
        </div>
    );
}
