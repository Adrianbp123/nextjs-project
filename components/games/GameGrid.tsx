import type { Game } from "@/types/game";
import GameCard from "./GameCard";
import styles from "./GameGrid.module.css"

type GameGridProps = {
    games: Game[];
};

/**
 * Viser en liste med spillkort i et grid.
 * 
 * @param games Listen med spill som skal vises
 * @returns En grid med spillkort.
 */

export default function GameGrid({ games }: GameGridProps) {
    return (
        <div className={styles.gamesGrid}>
           {games.map((game) => (
            <GameCard key={game.id} game={game} />
           ))}
        </div>
    )
}