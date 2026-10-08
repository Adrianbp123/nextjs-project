import { fetchGames } from "@/lib/rawg";


export default async function Home() {
  const data = await fetchGames();

  console.log(data.results);

  return (
    <main>
      <h1>Spilloversikt</h1>

      <ul>
        {data.results.map((game) => (
          <li key={game.id}>
              {game.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
