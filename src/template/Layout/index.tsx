import Banner from '../../components/Banner';
import Client from '../../components/Clients';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import NavBar from '../../components/NavBar';
import Questions from '../../components/Questions';
import styles from './Layout.module.scss';

export default function Layout() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <NavBar />
            </div>
            <Banner />
            <Client />
            <Questions />
            <Form />
            <Footer />
        </div>
    );
}
