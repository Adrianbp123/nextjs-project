"use client";

import styles from "./not-found.module.css"


/**
 * Viser en feilmelding dersom noe går galt
 * 
 * @param reset Funksjon som forsøker å rendre innholdet på nytt
 * @returns JSX for feilsiden.
 */

export default function Error({
    reset,
}: {
    reset: () => void;
}) {
    return (
        <main className={styles.main}>
            <h1>Noe gikk galt!</h1>
            <p>Kunne ikke laste inn spillene</p>
            <button onClick={reset}>
                Prøv igjen
            </button>
        </main>
    );
}