import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

function NavigationHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link to="" className={styles.navLink}>List To-Dos</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="create" className={styles.navLink}>Create To-Do</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavigationHeader;
