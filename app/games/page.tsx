import { fetchGames } from "@/lib/rawg";
import GameGrid from "@/components/games/GameGrid";
import styles from "./page.module.css"

type GamesPageProps = {
    searchParams: Promise<{
        search?:string;
    }>;
};

/**
 * Henter og viser spill fra RAWG API-et med mulighet for å søke.
 * 
 * @param props.searchParams URL-parametere som brukes til å hente søketeksten.
 * @returns En side med søkefelt og spilloversikt
 */

export default async function GamesPage({ searchParams }: GamesPageProps) {
    const { search } = await searchParams;
    const data = await fetchGames(search);
    

    return (
        <main className={styles.page}>
            <h1>Alle spill</h1>

        <form action="/games" method="GET" className={styles.searchForm}>
         <input
           className={styles.searchInput}
           type="search"
           name="search"
           placeholder="Søk etter spill..."
           defaultValue={search ?? ""} 
           />
           <button className={styles.searchButton} type="submit">
            Søk
           </button>
        </form>

        {data.results.length === 0 && (
            <p>Fant ingen spill som matcher søket ditt.</p>
        )}
            <GameGrid games={data.results} />
        </main>
    );
}