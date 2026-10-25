export type Game = {
    id: number;
    name: string;
    slug: string;
    background_image: string | null;
    rating: number;
}

export type GamesResponse = {
    results: Game[];
    next: string | null;
    previous: string | null;
};

export type GameDetails = Game & {
    description_raw: string;
    released: string | null;
    genres: {
        id: number;
        name: string;
    }[];
};