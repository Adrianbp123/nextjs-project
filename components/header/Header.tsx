import Link from "next/link";
import styles from "./Header.module.css"



/**
 * Viser nettsidens header med logo og navigasjon
 * 
 * @returns Header med navigasjon
 */
export default function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
            <Link href="/" className={styles.logo}>
            SpillCave
            </Link>

            <nav className={styles.nav} aria-label="Hovedmeny">
                <Link href="/">Forside</Link>
                <Link href="/games">Spill</Link>
                <Link href="/favorites">Favoritter</Link>
                <Link href="/about">Om</Link>
            </nav>
            </div>
        </header>
    )
}