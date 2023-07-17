import { SurfMapDto } from './surfMapDto';

export class LobbyInfoDto {
  constructor(
    public lobbyId: string,
    public mapsInLobby: SurfMapDto[],
    public stage: number
  ) {}
}
