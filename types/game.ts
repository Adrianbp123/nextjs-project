export type Game = {
    id: number;
    name: string;
    slug: string;
    background_image: string | null;
    rating: number;
}

export type GamesResponse = {
    results: Game[];
};