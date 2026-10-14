import { fetchGames } from "@/lib/rawg";
import GameCard from "@/components/GameCard";


export default async function Home() {
  const data = await fetchGames();

  return (
    <main>
      <h1>Spilloversikt</h1>

        {data.results.map((game) => (
        <GameCard key={game.id} game={game} />
        ))}
        
    </main>
  );
}
