import styles from './Title.module.scss';

interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
    return (
        <div className={styles.title}>
            <h1 className={styles.title}>{title}</h1>
            <hr className={styles.feature} />
        </div>
    );
}
