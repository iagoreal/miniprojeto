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
