import { fetchGames } from "@/lib/rawg";
import styles from "./page.module.css"
import GameGrid from "@/components/games/GameGrid";



/**
 * Henter spill fra RAWG API-et og viser dem på forsiden.
 * 
 * @returns Forsiden med en oversikt over spill.
 */
export default async function Home() {
  const data = await fetchGames();

  return (
    <main className={styles.page}>
      <h1>Spilloversikt</h1>

      <GameGrid games={data.results} />
        
    </main>
  );
}
