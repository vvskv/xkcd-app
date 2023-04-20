import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <Link to={routes.MAIN}>Comics</Link>
                <Link to={routes.TRANSLATOR}>Translator</Link>
                <Link to={routes.FAVORITE}>Favorite</Link>
            </div>
        </header>
    );
}
