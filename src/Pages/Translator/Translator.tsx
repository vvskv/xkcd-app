import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getTranslateIsError,
    getTranslateIsLoading,
    getTranslateIsSuccess,
    getTranslateText,
} from '../../store/translatorRequest/selector';
import TranslateForm from '../../Components/Forms/TranslateForm';
import styles from './Translator.module.scss';
import TranslatedList from '../../Components/Lists/TranslatedList';

export default function Translator() {
    const textResponce = useSelector(getTranslateText);
    const isSuccess = useSelector(getTranslateIsSuccess);
    const isLoading = useSelector(getTranslateIsLoading);
    const isError = useSelector(getTranslateIsError);

    return (
        <div className={styles.wrap}>
            <TranslateForm />
            <TranslatedList />
            {isLoading && <span>Loading...</span>}
            {isError && <span>Error</span>}
            {isSuccess && <span>{textResponce.data.translatedText}</span>}
        </div>
    );
}
