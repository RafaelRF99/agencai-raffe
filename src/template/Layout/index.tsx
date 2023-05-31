import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import styles from './Layout.module.scss';

export default function Layout() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <NavBar />
            </div>
            <div>
                <Banner />
            </div>
        </div>
    );
}
