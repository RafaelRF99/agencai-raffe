import styles from './Doubts.module.scss';

interface DoubtsProps {
    title: string;
    description: string;
}

export default function Doubts({ title, description }: DoubtsProps) {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
