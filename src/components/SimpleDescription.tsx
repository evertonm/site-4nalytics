import styles from '../styles/components/SimpleDescription.module.css';


export function SimpleDescription() {
    return (
        <div className={styles.container}>
            <img src="/computers.png" alt="Computers" className={styles.imageComputer}/>
            <div className={styles.descriptionContainer}>
                <h1 className={styles.title}> Evite os Insights oculto nos dados </h1>
                <span className={styles.description}>Descubra o poder de tomar decisões baseada em dados!</span>
                <button type="button" className={styles.contactButton}>Entre em contato</button>
            </div>
        </div>

    );
}