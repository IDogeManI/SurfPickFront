import { Component, OnDestroy, OnInit } from '@angular/core';
import { LobbyService } from '../lobby.service';
import { ActivatedRoute } from '@angular/router';
import { PredicateDto } from '../models/predicateDto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public isKsf: boolean = false;
  public isCybershoke: boolean = true;
  public isT1: boolean = true;
  public isT2: boolean = true;
  public isT3: boolean = true;
  public isT4: boolean = false;
  public isT5: boolean = false;
  public isT6: boolean = false;
  constructor(
    public lobby: LobbyService,
    public activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        this.lobby.id = params['id'];
        this.lobby.lobbyId = params['lobbyId'];
        if (this.lobby.lobbyId != undefined) {
          this.lobby.pingAllLobby();
          this.lobby.pingLobby();
        }
      },
      error: (err) => {
        this.lobby.errorMessage = err.Messge;
      },
    });
  }
  createLobby() {
    let servers: string[] = [];
    let tiers: number[] = [];
    if (this.isKsf) servers.push('KSF');
    if (this.isCybershoke) servers.push('Cybershoke');
    if (this.isT1) tiers.push(1);
    if (this.isT2) tiers.push(2);
    if (this.isT3) tiers.push(3);
    if (this.isT4) tiers.push(4);
    if (this.isT5) tiers.push(5);
    if (this.isT6) tiers.push(6);
    let predicate: PredicateDto = new PredicateDto(servers, tiers);
    this.lobby.createLobby(predicate);
  }
}
