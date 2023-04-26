import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

interface TProps {
    children: JSX.Element;
}

export const Layout = ({ children }: TProps) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
    );
};
