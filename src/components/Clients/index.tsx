import styles from './Client.module.scss';
// COMPONENTS
import Partnership from './Partnership';
// JSON
import partnership from './Partnerships.json';

function listPartnership() {
    return partnership.map((item, i) => {
        return (
            <div key={i}>
                <Partnership name={item.name} url={item.url} />
            </div>
        );
    });
}

export default function Client() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CLIENTES</h1>
            <hr className={styles.feature} />
            <div className={styles.part}>{listPartnership()}</div>
        </div>
    );
}
