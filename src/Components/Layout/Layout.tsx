import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import styles from './Layout.module.scss';

interface TProps {
    children: JSX.Element;
}

export const Layout = ({ children }: TProps) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
};
