import Link from "next/link";
import styles from "./not-found.module.css"


/**
 * Viser en 404-side dersom siden ikke finnes
 * 
 * @returns JSX for 404-siden.
 */

export default function NotFound() {
    return (
        <main className={styles.main}>
            <h1>404 - Siden finnes ikke</h1>
            <p>Fant ikke siden eller spillet du leter etter</p>
            <Link href="/games">Tilbake til spilloversikten</Link>
        </main>
    );
}