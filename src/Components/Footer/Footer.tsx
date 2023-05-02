import React from 'react';
import styles from './Footer.module.scss';
import { currentComics } from '../../utils/xkcdApi';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p>{currentComics}</p>
            <p>All right reserved</p>
        </div>
    );
}
