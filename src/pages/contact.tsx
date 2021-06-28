import { useState } from 'react';
import { Header } from '../components/Header';
import styles from '../styles/pages/Contact.module.css';

import emailjs from 'emailjs-com';


export default function Contact() {
    const [sendingMail, setSendingMail] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (localStorage.getItem('nextSendContact')) {
            if (new Date().getTime() < Number(localStorage.getItem('nextSendContact'))) {
                alert('Você já enviou uma mensagem recentemente. Espere um pouco :)')
                return;
            }
        }
        setSendingMail(true);
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 3);

        localStorage.setItem('nextSendContact', currentDate.getTime().toString());
        emailjs.sendForm("service_suup0lk", "template_jfk3p2t", e.target, 'user_Jge83BEXxhhDUKdUDAYmH')
            .then((result) => {
                setSendingMail(false);
                alert('Mensagem enviada com sucesso!');

                console.log(result.text);
            }, (error) => {
                setSendingMail(false);
                localStorage.removeItem('nextSendContact');
                alert('Ops! Não foi possível enviar a mensagem. Tente novamente.')
                console.log(error.text);
            });
    }

    return (
        <>
            <Header />
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.title}>Bem-vindo!</div>
                    <div className={styles.subtitle}>Entre em contato com nossa equipe</div>
                    <div className={`${styles.inputContainer} ${styles.ic1} `}>
                        <input id="name" className={styles.input} type="text" placeholder=" " />
                        <div className={styles.cut}></div>
                        <label htmlFor="name" className={styles.placeholder}>Nome</label>
                    </div>
                    <div className={`${styles.inputContainer}`}>
                        <input id="email" className={styles.input} type="email" placeholder=" " />
                        <div className={styles.cut}></div>
                        <label htmlFor="email" className={styles.placeholder}>E-mail</label>
                    </div>
                    <div className={`${styles.textarea} ${styles.inputContainer}`}>
                        <textarea id="message" className={`${styles.input}`}  placeholder=" " rows={5} cols={5}/>
                        <div className={`${styles.cut} ${styles.cutShort}`}></div>
                        <label htmlFor="message" className={styles.placeholder}>Mensagem</label>
                    </div>
                    <button type="submit" className={styles.submit} disabled={sendingMail}>{!sendingMail ? 'Enviar e-mail' : 'Enviando email...'}</button>
                </form>
            </div>
        </>
    );
}