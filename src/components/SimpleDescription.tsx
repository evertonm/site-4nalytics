import styles from '../styles/components/SimpleDescription.module.css';


export function SimpleDescription() {
    return (
        <div className={styles.container}>
            <img src="/computers.png" alt="Computers" />
            <div className={styles.descriptionContainer}>
                <h1>Advanced Software made simple</h1>
                <span>Lorem impsum</span>
                <button type="button" className={styles.contactButton}>Entre em contato</button>
            </div>
        </div>

    );
}