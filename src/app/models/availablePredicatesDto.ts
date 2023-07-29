export class AvailablePredicatesDto {
  constructor(
    public pools: string[],
    public tiers: string[][],
    public styles: string[][]
  ) {}
}
