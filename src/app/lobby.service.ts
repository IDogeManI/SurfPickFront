import { PredicateDto } from './models/predicateDto';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LobbyInfoDto } from './models/lobbyInfoDto';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LobbyService implements OnInit {
  private url: string = 'https://localhost:7119/api/lobby';
  public currentLobby: LobbyInfoDto = new LobbyInfoDto('', [], 0);
  public lobbyStage: number = 0;
  public errorMessage: string = '';
  public id: string = '';
  public lobbyId: string = '';
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        this.id = params['id'];
        this.lobbyId = params['lobbyId'];
      },
      error: (err) => {
        this.errorMessage = err.Messge;
      },
    });
  }
  createLobby(
    predicate: PredicateDto = new PredicateDto(['KSF', 'CyberShoke'], [1, 2, 3])
  ) {
    this.httpClient.post<LobbyInfoDto>(this.url, predicate).subscribe({
      next: (res) => {
        this.currentLobby = res;
      },
      error: (err: Error) => {
        this.errorMessage = err.message;
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
  pingLobby() {
    this.httpClient
      .put<LobbyInfoDto>(this.url + '?lobbyId=' + this.lobbyId, null)
      .subscribe({
        next: (res) => {
          this.currentLobby = res;
        },
        error: (err) => {
          this.errorMessage = err.Message;
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
        },
        error: (err) => {
          this.errorMessage = err.Message;
        },
      });
  }
}
