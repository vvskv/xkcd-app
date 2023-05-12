import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    getTranslateIsError,
    getTranslateIsLoading,
    getTranslateIsSuccess,
    getTranslateText,
} from '../../store/translator/selector';
import TranslateForm from '../../Components/Forms/TranslateForm';

export default function Translator() {
    // const dispatch = useDispatch();
    const textResponce = useSelector(getTranslateText);
    const isSuccess = useSelector(getTranslateIsSuccess);
    const isLoading = useSelector(getTranslateIsLoading);
    const isError = useSelector(getTranslateIsError);

    return (
        <div>
            <TranslateForm />
            <p>{isLoading && 'Loading...'}</p>
            <p>{isError && 'Error'}</p>
            <p>{isSuccess && textResponce.data.translatedText}</p>
        </div>
    );
}
