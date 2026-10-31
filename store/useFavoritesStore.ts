import { persist } from "zustand/middleware";
import { create } from "zustand";
import type { Game } from "@/types/game";


type FavoritesStore = {
    favorites: Game[];
    toggleFavorite: (game: Game) => void;
};

export const useFavoritesStore = create<FavoritesStore>()(
    persist(
        (set) => ({
            favorites: [],

        /**
         * Legger til eller fjerner et spill fra favorittlisten
         * @param game Spillet som skal legges til eller fjernes
         */
            toggleFavorite: (game) => {
                set((state) => ({
                    favorites: state.favorites.some(
                        (favorite) => favorite.id === game.id
                    )
                    ? state.favorites.filter(
                        (favorite) => favorite.id !== game.id)

                    : [...state.favorites, game],
                }));
            },
        }),
        {
            name: "spillcave-favorites-v2"
        }
    )
)