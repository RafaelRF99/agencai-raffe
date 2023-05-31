import styles from './NavBar.module.scss';
import { useState } from 'react';
import { EnvelopeSimple, Phone, DotsThree } from '@phosphor-icons/react';

export default function NavBar() {
    const [handleWindows, setHandleWindows] = useState(false);

    function tradeWindows() {
        setHandleWindows(handleWindows === true ? false : true);
    }

    const styleBlock = handleWindows ? 'block' : ''; // Style Global

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <p className={styles.title}>AGENCIA RAFFE</p>
                <ul className={styles.list}>
                    <li>INICIO</li>
                    <li>CLIENTES</li>
                    <li>PERGUNTAS FREQUENTES</li>
                    <li>FALE CONOSCO</li>
                </ul>
                <div className={styles.icons}>
                    <EnvelopeSimple size={18} />
                    <Phone size={18} />
                </div>
            </nav>
            <nav className={styles.nav_m}>
                <p className={styles.title_m}>AGENCIA RAFFE</p>
                <div className={`${styles.list_m} ${styleBlock}`}>
                    <ul className={styles.list_m}>
                        <li>INICIO</li>
                        <li>CLIENTES</li>
                        <li>PERGUNTAS FREQUENTES</li>
                        <li>FALE CONOSCO</li>
                    </ul>
                    <div className={styles.icons_m}>
                        <span>
                            <EnvelopeSimple /> E-mail
                        </span>
                        <span>
                            <Phone /> Phone
                        </span>
                    </div>
                </div>
            </nav>
            <button onClick={tradeWindows} className={styles.btn}>
                <DotsThree color="#f2f2f2" size={35} />
            </button>
        </div>
    );
}
