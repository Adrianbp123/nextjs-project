import type { Game } from "@/types/game";
import Link from "next/link";
import Image from "next/image";
import styles from "./GameCard.module.css"

type GameCardProps = {
    game: Game;
};

export default function GameCard({ game }: GameCardProps) {
    return (
        <article className={styles.card}>
            <Link href={`/games/${game.id}`} className={styles.link}>
            {game.background_image && (
            <Image
            className={styles.image}
            src={game.background_image}
            alt={`Bilde fra ${game.name}`}
            width={400}
            height={225}
            />
            )}
            <div className={styles.content}>
            <h2 className={styles.title}>{game.name}</h2>
            <p className={styles.rating}>Rating: {game.rating}</p>
            </div>
            </Link>
        </article>
    );
}