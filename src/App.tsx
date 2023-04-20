import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { Layout } from './Components/Layout/Layout';
import { routes } from './utils/routes';
import MainPage from './Pages/MainPage/MainPage';
import Translator from './Pages/Translator/Translator';
import Favorite from './Pages/Favorite/Favorite';

function App() {
    // function getComics(req?: string) {
    //     getComicsRequest(req).then((result) => {
    //         setComics(result);
    //     });
    // }

    // const getRandomComics = (e: React.MouseEvent<HTMLElement>) => {
    //     e.preventDefault();
    //     getComics('random');
    // };
    // const getNextComics = (e: React.MouseEvent<HTMLElement>) => {
    //     e.preventDefault();
    //     getComics('next');
    // };

    // let title: string = '';
    // let img: string = '';

    // const [comics, setComics] = useState<Comics | null>(null);
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     getComics();
    // }, []);
    // if (comics) {
    //     title = comics.title;
    //     img = comics.img;
    // }

    // return (
    //     <div>
    //         <Header />
    //         <h1>{title}</h1>
    //         <img src={img} alt="" />
    //         <button onClick={getRandomComics}>Random</button>
    //         <button onClick={getNextComics}>Next</button>
    //         <Footer />
    //     </div>
    // );
    // const dispatch = useDispatch();
    // const comics = useSelector(getComicsSelector);
    // const isSuccess = useSelector(getComicsIsSuccess);
    // const isError = useSelector(getComicsisError);
    // const isLoading = useSelector(getComicsIsLoading);

    // interface IComics {
    //     alt: string;
    //     day: string;
    //     img: string;
    //     link: string;
    //     month: string;
    //     news: string;
    //     num: number;
    //     safeTitle: string;
    //     title: string;
    //     transcript: string;
    //     year: string;
    // }
    // useEffect(() => {
    //     dispatch(getComics(''));
    // }, []);
    // console.log(comics);

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
