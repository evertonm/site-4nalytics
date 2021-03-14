import styles from '../styles/components/Header.module.css';


export function Header() {
    return (
        <div className={styles.headerContainer}>
            <div>
                <img src="/logo.jpeg" alt="Logo" className={styles.logoImage}/>
            </div>
            <div className={styles.headerItemsContainer}>
                <a href="">Home</a>
                <a href="">Blog</a>
                <a href="">Contato</a>
            </div>
        </div>


    );
}