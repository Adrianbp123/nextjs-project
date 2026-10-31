import Link from "next/link";
import styles from "./Footer.module.css"


/**
 * Viser nettsidens footer med navigasjon og informasjon
 * 
 * @returns Footer med navigasjonslenker og informasjon
 */
export default function Footer () {

    return (

        <footer className={styles.footer}>
            <div className={styles.footerContent}>

                <nav className={styles.nav} aria-label="Bunnmeny">
                <Link href="/">Forside</Link>
                <Link href="/games">Spill</Link>
                <Link href="/favorites">Favoritter</Link>
                <Link href="/about">Om</Link>
                </nav>

               <div className={styles.info}>
                <p>SpillCave</p>
                <small>© 2026 SpillCave</small>
               </div>

            </div>
        </footer>

    )

}