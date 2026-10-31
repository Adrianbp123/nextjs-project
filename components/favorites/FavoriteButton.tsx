"use client"

import { useFavoritesStore } from "@/store/useFavoritesStore";
import styles from "./FavoriteButton.module.css";


type FavoriteButtonProps = {
    gameId: number;
}

/**
 * Viser en favoritt-knapp som man kan trykke på
 * for å legge til eller fjerne fra favoritter
 * 
 * @param gameId ID-en til spillet
 * @returns En favoritt-knapp som viser om spillet er favoritt 
 */
export default function FavoriteButton({ gameId }: FavoriteButtonProps) {
    const favorites = useFavoritesStore((state) => state.favorites);
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

    const isFavorite = favorites.includes(gameId);

    return (
        <button
        type="button"
        className={styles.favoriteButton}
        onClick={() => toggleFavorite(gameId)}
        aria-pressed={isFavorite}
        aria-label="Favoritt"
        >
            {isFavorite ? "♥" : "♡"}
        </button>
    )
}