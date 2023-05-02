import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { Layout } from './Components/Layout/Layout';
import { routes } from './utils/routes';
import MainPage from './Pages/MainPage/MainPage';
import Translator from './Pages/Translator/Translator';
import Favorite from './Pages/Favorite/Favorite';

function App() {
    return (
        <div className={styles.wrapper}>
            <Layout>
                <Routes>
                    <Route path={routes.MAIN} element={<MainPage />} />
                    <Route path={routes.TRANSLATOR} element={<Translator />} />
                    <Route path={routes.FAVORITE} element={<Favorite />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
