import { fetchGameById } from "@/lib/rawg";
import styles from "./page.module.css"
import GameGrid from "@/components/games/GameGrid";
import Link from "next/link";


const favoriteIds = [
  51610, // Dark Souls Remastered
  27024, // Super Mario Galaxy 
  25097, // Ocarina of Time
  3387, // Bloodborne
  25131, // Pokemon DP
  326243, // Elden Ring
  27015, // Twilight Princess
  26055, // Bowsers inside story
  25924, // Majoras Mask
  564761, // Legends arceus
  52368, // Shadow of the Colossus
  809, // Skate 3
  
]


/**
 * Henter spill fra RAWG API-et og viser dem på forsiden.
 * 
 * @returns Forsiden med en oversikt over spill.
 */
export default async function Home() {
  const games = await Promise.all(
    favoriteIds.map((id) => fetchGameById(id))
  );

  const favoriteGames = games.filter((game) => game !== null);

  return (
    <main className={styles.page}>
      
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
      <section className={styles.intro}>
        <h1>Velkommen til SpillCave</h1>
        <p>Utforsk et stort utvalg spill, søk etter titler og finn spillinformasjon ved hjelp av RAWG API</p>
        <Link href="/games">Utforsk spill</Link>
      </section>

      <section className={styles.favorites}>
        <h2>UTVALGTE SPILL</h2>
        <p>Håper du har spilt minst en av disse</p>

         <GameGrid games={favoriteGames} />
      </section>
     

     
        
    </main>
  );
}
