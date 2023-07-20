import { PredicateDto } from './models/predicateDto';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LobbyInfoDto } from './models/lobbyInfoDto';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, retryWhen, timeout, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LobbyService {
  private url: string = 'https://localhost:7119/api/lobby';
  public showLobby: boolean = false;
  public currentLobby: LobbyInfoDto = new LobbyInfoDto('', [], 0, '', '');
  public errorMessage: string = '';
  public id: string = '';
  public lobbyId: string = '';
  constructor(private httpClient: HttpClient) {}
  createDuel(
    predicate: PredicateDto = new PredicateDto(
      ['KSF', 'CyberShoke'],
      [1, 2, 3],
      '',
      ''
    )
  ) {
    this.httpClient
      .post<LobbyInfoDto>(this.url + '/duel', predicate)
      .subscribe({
        next: (res) => {
          this.currentLobby = res;
          this.showLobby = true;
          this.lobbyId = this.currentLobby.lobbyId;
          this.pingLobby();
        },
        error: (err: Error) => {
          this.errorMessage = err.message;
          this.showLobby = false;
        },
      });
  }
  createTournamentBO3(
    predicate: PredicateDto = new PredicateDto(
      ['KSF', 'CyberShoke'],
      [1, 2, 3],
      '',
      ''
    )
  ) {
    this.httpClient
      .post<LobbyInfoDto>(this.url + '/tournamentbo3', predicate)
      .subscribe({
        next: (res) => {
          this.currentLobby = res;
          this.showLobby = true;
          this.lobbyId = this.currentLobby.lobbyId;
          this.pingLobby();
        },
        error: (err: Error) => {
          this.errorMessage = err.message;
          this.showLobby = false;
        },
      });
  }
  createTournamentBO5(
    predicate: PredicateDto = new PredicateDto(
      ['KSF', 'CyberShoke'],
      [1, 2, 3],
      '',
      ''
    )
  ) {
    this.httpClient
      .post<LobbyInfoDto>(this.url + '/tournamentbo5', predicate)
      .subscribe({
        next: (res) => {
          this.currentLobby = res;
          this.showLobby = true;
          this.lobbyId = this.currentLobby.lobbyId;
          this.pingLobby();
        },
        error: (err: Error) => {
          this.errorMessage = err.message;
          this.showLobby = false;
        },
      });
  }
  nextStage(mapName: string) {
    this.httpClient
      .patch<boolean>(
        this.url +
          '?id=' +
          this.id +
          '&lobbyId=' +
          this.lobbyId +
          '&mapName=' +
          mapName,
        null
      )
      .subscribe({
        next: (res) => {
          res == false
            ? (this.errorMessage = 'Bad Request')
            : (this.errorMessage = '');
        },
        error: (err) => {
          this.errorMessage = err.Message;
        },
      });
  }
  pingAllLobby() {
    this.httpClient
      .put<LobbyInfoDto>(this.url + '?lobbyId=' + this.lobbyId, null)
      .subscribe({
        next: (res) => {
          this.currentLobby = res;
          this.showLobby = true;
        },
        error: (err) => {
          this.errorMessage = err.Message;
          this.showLobby = false;
        },
      });
  }
  pingLobby() {
    timer(2000, 3000)
      .pipe(
        mergeMap((_) =>
          this.httpClient.put<LobbyInfoDto>(
            this.url + '?lobbyId=' + this.lobbyId,
            null
          )
        ),
        timeout(6000)
      )
      .subscribe({
        next: (res) => {
          for (let i = 0; i < this.currentLobby.mapsInLobby.length; i++)
            for (let j = 0; j < res.mapsInLobby.length; j++)
              if (
                res.mapsInLobby[j].name == this.currentLobby.mapsInLobby[i].name
              ) {
                this.currentLobby.mapsInLobby[i].status =
                  res.mapsInLobby[j].status;
                this.currentLobby.mapsInLobby[i].player =
                  res.mapsInLobby[j].player;
              }
          this.currentLobby.stage = res.stage;
          this.showLobby = true;
        },
        error: (err) => {
          this.errorMessage = err.Message;
          this.showLobby = false;
        },
      });
  }
  deleteLobby() {
    this.httpClient
      .delete<boolean>(this.url + '?lobbyId=' + this.lobbyId)
      .subscribe({
        next: (res) => {
          res == false
            ? (this.errorMessage = 'Bad Request')
            : (this.errorMessage = '');
          this.currentLobby = new LobbyInfoDto('', [], 0, '', '');
          this.lobbyId = '';
          this.id = '';
          this.showLobby = false;
        },
        error: (err) => {
          this.errorMessage = err.Message;
          this.showLobby = false;
        },
      });
  }
}
