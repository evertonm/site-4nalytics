import styles from '../styles/components/Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

export function Header() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    function handleMenu () {
        setIsSideMenuOpen(!isSideMenuOpen);
    }

    return (
        <>
            <div className={styles.headerContainer}>
                <div>
                    <img src="/logo_white.png" alt="Logo" className={styles.logoImage} />
                </div>
                <div className={styles.headerItemsContainer}>
                    <a href="">Home</a>
                    <a href="">Blog</a>
                    <a href="">Contato</a>

                </div>
                <div className={styles.sideMenuContainer}  onClick={handleMenu}>
                    <div className={styles.containerIconMenu}>
                        {!isSideMenuOpen && (
                            <FontAwesomeIcon icon="bars" />
                        )}
                        {isSideMenuOpen && (
                            <FontAwesomeIcon icon="times" />
                        )}
                    </div>
                </div>


            </div>
            {isSideMenuOpen && (
                <div className={styles.sideMenuItemsContainer}>
                    <div className={styles.sideMenuItemsContent}>

                        <a href="" className={styles.sideMenuItems}>Home</a>
                        <a href="" className={styles.sideMenuItems}>Blog</a>
                        <a href="" className={styles.sideMenuItems}>Contato</a>
                    </div>
                </div>
            )}

        </>



    );
}