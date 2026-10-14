import type { Game } from "@/types/game";
import Link from "next/link";

type GameCardProps = {
    game: Game;
};

export default function GameCard({ game }: GameCardProps) {
    return (
        <article>
            <Link href={`/games/${game.id}`}>
            <h2>{game.name}</h2>
            <p>Rating: {game.rating}</p>
            </Link>
        </article>
    );
}