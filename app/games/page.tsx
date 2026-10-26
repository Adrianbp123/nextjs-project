import { fetchGames } from "@/lib/rawg";
import GameGrid from "@/components/games/GameGrid";
import styles from "./page.module.css"
import Pagination from "@/components/games/Pagination";

type GamesPageProps = {
    searchParams: Promise<{
        search?:string;
        genre?: string;
        ordering?: string;
        page?: string;
    }>;
};

/**
 * Henter og viser spill fra RAWG API-et med søk, filtrering,
 * sortering og paginering.
 * 
 * @param props.searchParams URL-parametere som brukes for søk,
 * sjanger, sortering og sidetall
 * @returns En side med søkefelt og spilloversikt
 */

export default async function GamesPage({ searchParams }: GamesPageProps) {
    const { search, genre, ordering, page } = await searchParams;

    const parsedPage = Number(page);
    const pageNumber =
    Number.isSafeInteger(parsedPage) && parsedPage > 0
    ? parsedPage: 1;

    const data = await fetchGames(search, genre, ordering, pageNumber);
    

    return (
        <main className={styles.page}>
            <section className={styles.intro}>
    <video
    className={styles.backgroundVideo}
    autoPlay
    muted
    loop
    playsInline
    aria-hidden="true"
  >
    <source src="/bgvideo.mp4" type="video/mp4" />
  </video>
            <h1>Utforsk spill</h1>
            </section>

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

            <Pagination 
            page={pageNumber}
            hasNext={data.next !== null}
            hasPrevious={pageNumber > 1}
            search={search}
            genre={genre}
            ordering={ordering}
            />
        </main>
    );
}
