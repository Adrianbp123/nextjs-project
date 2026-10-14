import { fetchGameById } from "@/lib/rawg";
import { notFound } from "next/navigation";

type GamePageProps = {
    params: Promise<{
        id: string;
    }>;
};

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
            <h1>{game.name}</h1>

            <p>Rating: {game.rating}</p>
            <p>Release date: {game.released}</p>
            <p>{game.description_raw}</p>
        </main>
    )
}