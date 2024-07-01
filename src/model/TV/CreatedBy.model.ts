export class CreatedBy {
  constructor(
    public id: number,
    public credit_id: string,
    public name: string,
    public gender: number,
    public profile_path: string | null
  ) {}
}
