import { fetchGames } from "@/lib/rawg";
import GameGrid from "@/components/games/GameGrid";
import styles from "./page.module.css"

type GamesPageProps = {
    searchParams: Promise<{
        search?:string;
        genre?: string;
        ordering?: string;
    }>;
};

/**
 * Henter og viser spill fra RAWG API-et med mulighet for å søke.
 * 
 * @param props.searchParams URL-parametere som brukes til å hente søketeksten.
 * @returns En side med søkefelt og spilloversikt
 */

export default async function GamesPage({ searchParams }: GamesPageProps) {
    const { search, genre, ordering } = await searchParams;
    const data = await fetchGames(search, genre, ordering);
    

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

           <select 
           className={styles.filterSelect}
           name="genre" 
           defaultValue={genre ?? ""}>
            <option value="">Alle sjangere</option>
            <option value="action">Action</option>
            <option value="role-playing-games-rpg">RPG</option>
            <option value="adventure">Adventure</option>
            <option value="shooter">Shooter</option>
           </select>

           <select 
           className={styles.filterSelect} 
           name="ordering" 
           defaultValue={ordering ?? ""}>

            <option value="">Standard sortering</option>
            <option value="-rating">Høyest rating</option>
            <option value="-released">Nyeste først</option>
            <option value="name">Navn A-Å</option>




           </select>



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
