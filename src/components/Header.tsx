import styles from '../styles/components/Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

import Link from 'next/link'

export function Header() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    function handleMenu() {
        setIsSideMenuOpen(!isSideMenuOpen);
    }

    return (
        <>
            <div className={styles.headerContainer}>
                <div>
                    <Link href="/">
                        <img src="/logo_white.png" alt="Logo" className={styles.logoImage} />
                    </Link>
                </div>
                <div className={styles.headerItemsContainer}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/">
                        <a >Blog</a>
                    </Link>
                    <Link href="/contact">
                        <a >Contato</a>
                    </Link>
                </div>
                <div className={styles.sideMenuContainer} onClick={handleMenu}>
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
                        <Link href="/">
                            <a className={styles.sideMenuItems}>Home</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.sideMenuItems}>Blog</a>
                        </Link>
                        <Link href="/contact">
                            <a className={styles.sideMenuItems}>Contato</a>
                        </Link>
                    </div>
                </div>
            )}

        </>



    );
}