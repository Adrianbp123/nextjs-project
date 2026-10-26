import styles from "./page.module.css"

export default function AboutPage() {
    return (
        <main className={styles.page}>

            <section>
            <h1>Om SpillCave</h1>
            <p>
                SpillCave er en nettside der du kan utforske
                spill og finne informasjon om dine favoritter.
            </p>
            </section>


            <section>
                <h2>Hvordan fungerer det?</h2>
                <p>
                    SpillCave henter spillinformasjon fra RAWG API.
                    Du kan søke etter spill, filtrere etter sjanger og sortere resultatene.
                    Ved å trykke på et spillkort kan du lese mer om det.
                </p>
            </section>

            <section>
                <h2>Om prosjektet</h2>
                <p>
                    SpillCave er utviklet med Next.js, React, TypeScript og CSS Modules.
                    Underveis har jeg jobbet med API-kall, gjenbrukbare komponenter og responsivt design.
                </p>
            </section>


        </main>
    )
}