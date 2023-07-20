export class PredicateDto {
  constructor(
    public servers: string[],
    public tiers: number[],
    public player1: string,
    public player2: string
  ) {}
}
