export class SurfMapDto {
  constructor(
    public name: string,
    public server: string,
    public imageSrc: string,
    public tier: number,
    public status: number
  ) {}
}
