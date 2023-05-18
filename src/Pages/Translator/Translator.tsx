import React from 'react';
import TranslateForm from '../../Components/Forms/TranslateForm';
import styles from './Translator.module.scss';
import TranslatedList from '../../Components/Lists/TranslatedList';

export default function Translator() {
    return (
        <div className={styles.wrap}>
            <TranslateForm />
            <TranslatedList />
        </div>
    );
}
