export class TVShow {
  constructor(
    public backdrop_path: string | null,
    public first_air_date: string,
    public genre_ids: number[],
    public id: number,
    public name: string,
    public origin_country: string[],
    public original_language: string,
    public original_name: string,
    public overview: string,
    public popularity: number,
    public poster_path: string | null,
    public vote_average: number,
    public vote_count: number
  ) {}
}

export class TVShowDetail {
  constructor(
    public backdrop_path: string | null,
    public first_air_date: string,
    public genre_ids: number[],
    public id: number,
    public name: string,
    public origin_country: string[],
    public original_language: string,
    public original_name: string,
    public overview: string,
    public popularity: number,
    public poster_path: string | null,
    public vote_average: number,
    public vote_count: number,
    public created_by: {
      id: number;
      credit_id: string;
      name: string;
      gender: number;
      profile_path: string | null;
    }[],
    public episode_run_time: number[],
    public genres: { id: number; name: string }[],
    public homepage: string | null,
    public in_production: boolean,
    public languages: string[],
    public last_air_date: string,
    public last_episode_to_air: {
      air_date: string;
      episode_number: number;
      id: number;
      name: string;
      overview: string;
      production_code: string;
      season_number: number;
      still_path: string | null;
      vote_average: number;
      vote_count: number;
    },
    public next_episode_to_air: {
      air_date: string;
      episode_number: number;
      id: number;
      name: string;
      overview: string;
      production_code: string;
      season_number: number;
      still_path: string | null;
      vote_average: number;
      vote_count: number;
    } | null,
    public networks: {
      name: string;
      id: number;
      logo_path: string | null;
      origin_country: string;
    }[],
    public number_of_episodes: number,
    public number_of_seasons: number,
    public production_companies: {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }[],
    public seasons: {
      air_date: string;
      episode_count: number;
      id: number;
      name: string;
      overview: string;
      poster_path: string | null;
      season_number: number;
    }[],
    public spoken_languages: {
      english_name: string;
      iso_639_1: string;
      name: string;
    }[],
    public status: string,
    public tagline: string | null,
    public type: string
  ) {}
}
