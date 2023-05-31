import Banner from '../../components/Banner';
import Client from '../../components/Clients';
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
            <div className={styles.teste}>
                <div className={styles.banner}>
                    <Banner />
                </div>
                <div>
                    <Client />
                </div>
                <div>
                    <Questions />
                </div>
                <div>
                    <Form />
                </div>
            </div>
        </div>
    );
}
