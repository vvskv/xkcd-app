import React from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../../utils/routes';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <NavLink
                    to={routes.MAIN}
                    className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
                >
                    Comics
                </NavLink>
                <NavLink
                    to={routes.TRANSLATOR}
                    className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
                >
                    Translator
                </NavLink>
            </div>
        </header>
    );
}
