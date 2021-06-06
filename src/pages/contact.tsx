import { useState } from 'react';
import { Header } from '../components/Header';
import styles from '../styles/pages/Contact.module.css';

import emailjs from 'emailjs-com';


export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault()        
        if(localStorage.getItem('nextSendContact')) {
            if(new Date().getTime() < Number(localStorage.getItem('nextSendContact'))) {
                alert('Você já enviou uma mensagem recentemente. Espere um pouco :)')
                return;
            }
        }
        const currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 3);
        
        localStorage.setItem('nextSendContact', currentDate.getTime().toString());
        emailjs.sendForm("service_suup0lk","template_jfk3p2t", e.target, 'user_Jge83BEXxhhDUKdUDAYmH')
        .then((result) => {
            alert('Mensagem enviada com sucesso!');
           
            console.log(result.text);
        }, (error) => {
            localStorage.removeItem('nextSendContact');
            alert('Ops! Não foi possível enviar a mensagem. Tente novamente.')
            console.log(error.text);
        });       
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <form className={styles.main} onSubmit={handleSubmit}>                   
                    <div className={styles.inputGroup} >
                        <label htmlFor='name'>Nome</label>
                        <input type='text' name='name' className={styles.inputField} />
                    </div>
                    <div className={styles.inputGroup} >
                        <label htmlFor='email'>E-mail</label>
                        <input type='email' name='email' className={styles.inputField} />
                    </div>
                    <div className={styles.inputGroup} >
                        <label htmlFor='message'>Mensagem</label>
                        <textarea name='message' className={styles.inputFieldTextArea} rows={5} cols={5}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar e-mail</button>
                </form >
            </div>
        </>
    );
}