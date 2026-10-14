import "server-only";
import type { GamesResponse, GameDetails } from "@/types/game";


const BASE_URL = "https://api.rawg.io/api";
const apiKey = process.env.RAWG_API_KEY;

if (!apiKey) {
        throw new Error("RAWG API-nøkkel mangler")
    }

export async function fetchGames(): Promise<GamesResponse> {

    const response = await fetch(
        `${BASE_URL}/games?key=${apiKey}&page_size=10`
    );

    if (!response.ok) {
        throw new Error("Kunne ikke hente spill fra RAWG");
    }

    const data: GamesResponse = await response.json();

    return data;
}


export async function fetchGameById(id: number): Promise<GameDetails | null> {
    
    const response = await fetch(
        `${BASE_URL}/games/${id}?key=${apiKey}`
    );

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error("Kunne ikke hente spillet fra RAWG");
    }

    const data: GameDetails = await response.json();

    return data;
    
}