export class SurfMapDto {
  constructor(
    public name: string,
    public server: string,
    public imageSource: string,
    public tier: number,
    public status: number
  ) {}
}
