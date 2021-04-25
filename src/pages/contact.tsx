import { Header } from '../components/Header';
import styles from '../styles/pages/Contact.module.css';


export default function Contact() {
    return (
        <>
            <Header />
            <main className={styles.contactContainer}>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
            </main>
        </>
    );
}