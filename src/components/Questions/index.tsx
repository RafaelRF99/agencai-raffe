import styles from './Questions.module.scss';
// COMPONENTS
import Title from '../Title';
import Doubts from './Doubts';
// JSON
import question from './Question.json';

function renderDoubts() {
    return question.map((question, i) => {
        return (
            <div className={styles.question} key={i}>
                <Doubts
                    title={question.title}
                    description={question.description}
                />
            </div>
        );
    });
}

export default function Questions() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Title title="PERGUNTAS FREQUENTES" />
            </div>
            <div className={styles.quest}>{renderDoubts()}</div>
        </div>
    );
}
