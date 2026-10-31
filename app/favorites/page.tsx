"use client"

import { useFavoritesStore } from "@/store/useFavoritesStore";
import GameGrid from "@/components/games/GameGrid";
import styles from "./page.module.css"
import Link from "next/link";


/**
 * Viser spillene brukeren har lagt til i favoritter
 * @returns En GameGrid med favorittspill eller en melding hvis listen er tom
 */
export default function FavoritesPage() {
    const favorites = useFavoritesStore((state) => state.favorites);

    return (
        <main className={styles.page}>
            <section className={styles.intro}>
            <h1>
                <span className={styles.purple}>Mine</span>{" "} 
                <span className={styles.pink}>favoritter</span>
            </h1>
            </section>

            {favorites.length === 0 ? (
                <div className={styles.noFavorites}>
                <p>Du har ingen favorittspill enda.</p>
                <Link href="/games" className={styles.exploreButton}>
                Utforsk spill
                </Link>
                </div>
            ) : (
                <GameGrid games={favorites} />
            )}
        </main>
    )
}