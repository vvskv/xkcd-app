import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <Link to={routes.MAIN} className={styles.link}>
                    Comics
                </Link>
                <Link to={routes.TRANSLATOR} className={styles.link}>
                    Translator
                </Link>

                {/* <span className={styles.link}>
                    <Link to={routes.MAIN} className={styles.link}>Comics</Link>
                </span>
                <span className={styles.link}>
                    <Link to={routes.TRANSLATOR}>Translator</Link>
                </span> */}
            </div>
        </header>
    );
}
