import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.scss';

interface TProps {
    children: JSX.Element;
}

export const Layout = ({ children }: TProps) => {
    return (
        <div className={styles.postPageWrapper}>
            <Header />
            <div className={styles.contentWrapper}>{children}</div>
            <Footer />
        </div>
    );
};
