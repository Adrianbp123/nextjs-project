import { fetchGameById } from "@/lib/rawg";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css"



type GamePageProps = {
    params: Promise<{
        id: string;
    }>;
};

/**
 * Henter og viser informasjon om et bestemt spill.
 * 
 * @param props.params URL-parametere som inneholder spillets ID.
 * @returns JSX for detaljside med informasjon om spillet.
 */
export default async function GamePage({ params }: GamePageProps) {
    const { id } = await params;
    const gameId = Number(id);

    if (!Number.isInteger(gameId) || gameId <= 0) {
        notFound();
    }

    const game = await fetchGameById(gameId);

    if (!game) {
        notFound();
    }



    return (
        <main>
            <h1 className={styles.gameTitle}>{game.name}</h1>

        <div className={styles.hero}>
            {game.background_image && (
                <Image
                src={game.background_image}
                alt={`Bilde fra ${game.name}`}
                fill
                sizes="100vw"
                className={styles.heroImage}
                 />
            )}
        </div>

<div className={styles.gameContent}>

        <div className={styles.gameMeta}>
            <span className={styles.rating}>☆ {game.rating} / 5</span>
            <span className={styles.released}>Utgivelsesdato: {game.released}</span>
        </div>

        <div className={styles.genres}>
            {game.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
            ))}
        </div>

        <div className={styles.description}>
            <h2>Om spillet</h2>
            <p>{game.description_raw.split("Español")[0]}</p>
            
        </div>

</div>
            
        </main>
    )
}

