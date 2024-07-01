export class LastEpisodeToAir {
  constructor(
    public air_date: string,
    public episode_number: number,
    public id: number,
    public name: string,
    public overview: string,
    public production_code: string,
    public season_number: number,
    public still_path: string | null,
    public vote_average: number,
    public vote_count: number
  ) {}
}
