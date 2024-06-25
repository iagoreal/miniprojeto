export class Movie {
  constructor(
    public adult: boolean,
    public backdrop_path: string | null,
    public genre_ids: number[],
    public id: number,
    public original_language: string,
    public original_title: string,
    public overview: string,
    public popularity: number,
    public poster_path: string | null,
    public release_date: string,
    public title: string,
    public video: boolean,
    public vote_average: number,
    public vote_count: number
  ) {}
}

export class MovieDetail {
  constructor(
    public adult: boolean,
    public backdrop_path: string | null,
    public genre_ids: number[],
    public id: number,
    public original_language: string,
    public original_title: string,
    public overview: string,
    public popularity: number,
    public poster_path: string | null,
    public release_date: string,
    public title: string,
    public video: boolean,
    public vote_average: number,
    public vote_count: number,
    public belongs_to_collection: object | null,
    public budget: number,
    public genres: { id: number; name: string }[],
    public homepage: string | null,
    public imdb_id: string | null,
    public production_companies: {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }[],
    public production_countries: { iso_3166_1: string; name: string }[],
    public revenue: number,
    public runtime: number | null,
    public spoken_languages: { iso_639_1: string; name: string }[],
    public status: string,
    public tagline: string | null
  ) {}
}
