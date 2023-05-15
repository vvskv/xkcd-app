import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { Layout } from './Components/Layout/Layout';
import { routes } from './utils/routes';
import MainPage from './Pages/MainPage/MainPage';
import Translator from './Pages/Translator/Translator';

function App() {
    return (
        <div className={styles.wrapper}>
            <Layout>
                <Routes>
                    <Route path={routes.MAIN} element={<MainPage />} />
                    <Route path={routes.TRANSLATOR} element={<Translator />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
