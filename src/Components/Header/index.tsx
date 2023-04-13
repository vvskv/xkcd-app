import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li>Comics</li>
                <li>Translator</li>
                <li>Favorite</li>
            </ul>
        </div>
    );
}
