import { fetchGames } from "@/lib/rawg";
import GameCard from "@/components/games/GameCard";
import styles from "./page.module.css"


export default async function Home() {
  const data = await fetchGames();

  return (
    <main className={styles.page}>
      <h1>Spilloversikt</h1>

      <section className={styles.gamesGrid}>

        {data.results.map((game) => (
        <GameCard key={game.id} game={game} />
        ))}
        
      </section>
        
    </main>
  );
}
