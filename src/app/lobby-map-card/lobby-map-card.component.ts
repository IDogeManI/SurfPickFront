import { Component, Input, OnInit } from '@angular/core';
import { SurfMapDto } from '../models/surfMapDto';
import { LobbyService } from '../lobby.service';

@Component({
  selector: 'app-lobby-map-card',
  templateUrl: './lobby-map-card.component.html',
  styleUrls: ['./lobby-map-card.component.scss'],
})
export class LobbyMapCardComponent {
  constructor(public lobby: LobbyService) {}
  @Input() map: SurfMapDto = new SurfMapDto('', '', '', '', '', 0, '');
  showBanButton(): boolean {
    return (
      (this.lobby.currentLobby.stage == 1 &&
        this.lobby.id == '1' &&
        this.map.status == 0) ||
      (this.lobby.currentLobby.stage == 2 &&
        this.lobby.id == '2' &&
        this.map.status == 0)
    );
  }
  showPickButton(): boolean {
    return (
      (this.lobby.currentLobby.stage == 3 &&
        this.lobby.id == '1' &&
        this.map.status == 0) ||
      (this.lobby.currentLobby.stage == 4 &&
        this.lobby.id == '2' &&
        this.map.status == 0)
    );
  }
  onBanButton() {
    this.lobby.currentLobby.stage = 0;
    this.map.status = 1;
    this.lobby.nextStage(this.map.name);
  }
  onPickButton() {
    this.lobby.currentLobby.stage = 0;
    this.map.status = 2;
    this.lobby.nextStage(this.map.name);
  }
}
