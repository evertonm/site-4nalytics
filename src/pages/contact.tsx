import { useState } from 'react';
import { Header } from '../components/Header';
import styles from '../styles/pages/Contact.module.css';


export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Sending')
  
      let data = {
          name,
          email,
          message
      }
  
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true) 
              setName('')
              setEmail('')
              setMessage('')
          }
      })
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <form className={styles.main} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup} >
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' className={styles.inputField} />
                    </div>
                    <div className={styles.inputGroup} >
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' className={styles.inputField} />
                    </div>
                    <div className={styles.inputGroup} >
                        <label htmlFor='message'>Message</label>
                        <input type='text' name='message' className={styles.inputField} />
                    </div>
                    <button type='submit'>Enviar e-mail</button>
                </form >
            </div>
        </>
    );
}