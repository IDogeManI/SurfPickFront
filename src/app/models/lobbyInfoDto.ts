import { SurfMapDto } from './surfMapDto';

export class LobbyInfoDto {
  constructor(
    public lobbyId: string,
    public mapsInLobby: SurfMapDto[],
    public stage: number,
    public player1: string,
    public player2: string,
    public isPlayer1WantReroll: boolean,
    public isPlayer2WantReroll: boolean,
    public rerollable: boolean
  ) {}
}
