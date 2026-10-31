"use client"

import { useFavoritesStore } from "@/store/useFavoritesStore";
import styles from "./FavoriteButton.module.css";
import type { Game } from "@/types/game";
import { Heart } from "lucide-react";


type FavoriteButtonProps = {
    game: Game;
}

/**
 * Viser en favoritt-knapp som man kan trykke på
 * for å legge til eller fjerne fra favoritter
 * 
 * @param game Spillet som skal legges til eller fjernes
 * @returns En favoritt-knapp som viser om spillet er favoritt 
 */
export default function FavoriteButton({ game }: FavoriteButtonProps) {
    const favorites = useFavoritesStore((state) => state.favorites);
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

    const isFavorite = favorites.some(
        (favorite) => favorite.id === game.id
    );

    return (
        <button
        type="button"
        className={styles.favoriteButton}
        onClick={() => toggleFavorite(game)}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? `Fjern ${game.name} fra favoritter`
        :`Legg til ${game.name} favoritter`
        }
        >
            <Heart
            size={16}
            fill={isFavorite ? "currentColor" : "none"}
            aria-hidden="true"
            />
        </button>
    )
}