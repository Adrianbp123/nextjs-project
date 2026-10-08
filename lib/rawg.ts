import type { GamesResponse } from "@/types/game";

const BASE_URL = "https://api.rawg.io/api"

export async function fetchGames(): Promise<GamesResponse> {

    const apiKey = process.env.RAWG_API_KEY;

    if (!apiKey) {
        throw new Error("RAWG API-nøkkel mangler")
    }

    const response = await fetch(
        `${BASE_URL}/games?key=${apiKey}&page_size=10`
    );

    if (!response.ok) {
        throw new Error("Kunne ikke hente spill fra RAWG");
    }

    const data: GamesResponse = await response.json();

    return data;


}