export class PredicateDto {
  constructor(
    public pool: string,
    public tiers: string[],
    public styles: string[],
    public player1: string,
    public player2: string
  ) {}
}
