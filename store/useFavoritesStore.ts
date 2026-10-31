import { persist } from "zustand/middleware";
import { create } from "zustand";


type FavoritesStore = {
    favorites: number[];
    toggleFavorite: (id: number) => void;
};

export const useFavoritesStore = create<FavoritesStore>()(
    persist(
        (set) => ({
            favorites: [],

        /**
         * Legger til eller fjerner et spill fra favorittlisten
         * @param id ID-en til spillet
         */
            toggleFavorite: (id) => {
                set((state) => ({
                    favorites: state.favorites.includes(id)
                    ? state.favorites.filter((gameId) => gameId !== id)
                    : [...state.favorites, id],
                }));
            },
        }),
        {
            name: "spillcave-favorites"
        }
    )
)