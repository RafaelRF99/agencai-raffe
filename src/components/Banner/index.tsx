import styles from './Banner.module.scss';
import Teste from '../../../public/img/StuckatHome.png';

export default function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.inform}>
                <h2 className={styles.title}>
                    AGENCIA DE MARKETING <br /> E <br /> CONSULTORIA
                </h2>
                <p>
                    Ajudando pequenas empresas a <br /> descobrir novas maneiras
                    de crescer
                </p>
                <button className={styles.btn}>FALE COM GESTOR</button>
            </div>
            <div className={styles.image}>
                <img src={Teste} alt="Trabalho" />
            </div>
        </div>
    );
}
