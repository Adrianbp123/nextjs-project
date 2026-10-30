import "server-only";
import type { GamesResponse, GameDetails } from "@/types/game";


const BASE_URL = "https://api.rawg.io/api";
const apiKey = process.env.RAWG_API_KEY;

if (!apiKey) {
        throw new Error("RAWG API-nøkkel mangler")
    }

/**
 * Henter spill fra RAWG API-et med max 12 spill per side.
 * Støtter søk,filtrering, sortering og paginering
 * 
 * @param search Søketeksten som sendes til API-et.
 * @param genre Sjangeren spillene skal filtreres etter.
 * @param ordering Hvordan spillene skal sorteres.
 * @param page Sidetallet som skal hentes.
 * @returns En liste med spill fra API-et
 */

export async function fetchGames(
    search?:string,
    genre?: string,
    ordering?: string,
    page: number = 1
   ): Promise<GamesResponse> {

    const response = await fetch(
        `${BASE_URL}/games?key=${apiKey}&page_size=12&page=${page}` +
        `${search ? `&search=${encodeURIComponent(search)}&search_precise=true` : ""}` +
        `${genre ? `&genres=${encodeURIComponent(genre)}` : ""}` +
        `${ordering ? `&ordering=${encodeURIComponent(ordering)}` :""}`
    );

    if (!response.ok) {
        throw new Error("Kunne ikke hente spill fra RAWG");
    }

    const data: GamesResponse = await response.json();
// filtrerer bort spill uten rating
    data.results = data.results.filter((game) => game.rating > 0);

    return data;
}

/**
 * Henter informasjon om ett spill fra RAWG API-et
 * 
 * @param id ID-en til spillet som skal hentes.
 * @returns Informasjon om spillet, eller null hvis spillet ikke finnes.
 */

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