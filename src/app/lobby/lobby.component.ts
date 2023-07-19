import { Component } from '@angular/core';
import { LobbyService } from '../lobby.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent {
  public location: Location = document.location;
  constructor(public lobby: LobbyService) {}
  public showLinks: boolean = false;
}
