export class SurfMapDto {
  constructor(
    public name: string,
    public server: string,
    public imageSrc: string,
    public tier: string,
    public style: string,
    public status: number,
    public player: string
  ) {}
}
