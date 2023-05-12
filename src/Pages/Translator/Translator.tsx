import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getTranslateIsError,
    getTranslateIsLoading,
    getTranslateIsSuccess,
    getTranslateText,
} from '../../store/translator/selector';
import TranslateForm from '../../Components/Forms/TranslateForm';
import { addToArr } from '../../store/text';
import { getArrSource } from '../../store/text/selector';
import TranslatedList from '../../Components/Lists/TranslatedList';

export default function Translator() {
    const dispatch = useDispatch();
    const textResponce = useSelector(getTranslateText);
    const isSuccess = useSelector(getTranslateIsSuccess);
    const isLoading = useSelector(getTranslateIsLoading);
    const isError = useSelector(getTranslateIsError);
    const sourceArr = useSelector(getArrSource);

    // if (isSuccess) {
    //     dispatch(addToArr({ source: [], translated: [textResponce.data.translatedText] }));
    // }
    // console.log(sourceArr);

    return (
        <div>
            <TranslateForm />
            <TranslatedList />
            <p>{isLoading && 'Loading...'}</p>
            <p>{isError && 'Error'}</p>
            <p>{isSuccess && textResponce.data.translatedText}</p>
        </div>
    );
}
