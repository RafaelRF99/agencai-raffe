import styles from './Form.module.scss';
import Title from '../Title';
import { EnvelopeSimple, Phone } from '@phosphor-icons/react';
import { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState<number>();
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const UserMessage = {
            name,
            phone,
            email,
            msg,
        };
        console.log(UserMessage);
    }

    return (
        <div className={styles.container}>
            <Title title="FALE CONOSCO" />
            <p className={styles.aid}>
                Fale com um dos nossos gestores! Potencialize sua marca.
                Maximize seus resultados.
            </p>
            <div className={styles.content}>
                <div className={styles.inform}>
                    <p>Indaiatuba, SP - Brasil</p>
                    <span>
                        <Phone /> +55 (19) 99825-5728
                    </span>
                    <span>
                        <EnvelopeSimple /> rafaelfferreira99@hotmail.com
                    </span>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.main}>
                        <input
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Telefone"
                            value={phone ? phone.toString() : ''}
                            onChange={(e) => setPhone(parseInt(e.target.value))}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Endereço de Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Mensagem"
                        className={styles.msg}
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                    />
                    <button className={styles.btn}>FALE CONOSCO</button>
                </form>
            </div>
        </div>
    );
}
