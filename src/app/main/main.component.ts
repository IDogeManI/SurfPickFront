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
  public pool: string = '';
  public styles: boolean[] = [];
  public tiers: boolean[] = [];
  public player1: string = '';
  public player2: string = '';
  constructor(
    public lobby: LobbyService,
    public activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.lobby.getAvailablePredicates();
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
  onChangePool() {
    this.styles = [];
    this.tiers = [];
  }
  onChangeTier(event: Event) {
    if (this.tiers[7] == true) {
      if (this.tiers.filter((x) => x == true).length == 1) {
        setTimeout(() => {
          this.tiers[6] = true;
        }, 100);
      }
    }
  }
  isShowStyles(): boolean {
    let tmp: boolean = false;
    this.tiers.forEach((tier) => {
      if (tier == true) {
        tmp = true;
      }
    });
    return tmp;
  }
  isShowButtons(): boolean {
    let tmp: boolean = false;
    this.styles.forEach((tier) => {
      if (tier == true) {
        tmp = true;
      }
    });
    return tmp;
  }
  createDuel() {
    let tierToPredicate: string[] = [];
    this.tiers.forEach((tier, i) => {
      if (tier) {
        tierToPredicate.push(
          this.lobby.availablePredicates.tiers[
            this.lobby.availablePredicates.pools.indexOf(this.pool)
          ][i]
        );
      }
    });
    let stylesToPredicate: string[] = [];
    this.styles.forEach((style, i) => {
      if (style) {
        stylesToPredicate.push(
          this.lobby.availablePredicates.styles[
            this.lobby.availablePredicates.pools.indexOf(this.pool)
          ][i]
        );
      }
    });
    let predicate: PredicateDto = new PredicateDto(
      this.pool,
      tierToPredicate,
      stylesToPredicate,
      this.player1,
      this.player2
    );
    this.lobby.createDuel(predicate);
  }
  createTournamentBO3() {
    let tierToPredicate: string[] = [];
    this.tiers.forEach((tier, i) => {
      if (tier) {
        tierToPredicate.push(
          this.lobby.availablePredicates.tiers[
            this.lobby.availablePredicates.pools.indexOf(this.pool)
          ][i]
        );
      }
    });
    let stylesToPredicate: string[] = [];
    this.styles.forEach((style, i) => {
      if (style) {
        stylesToPredicate.push(
          this.lobby.availablePredicates.styles[
            this.lobby.availablePredicates.pools.indexOf(this.pool)
          ][i]
        );
      }
    });
    let predicate: PredicateDto = new PredicateDto(
      this.pool,
      tierToPredicate,
      stylesToPredicate,
      this.player1,
      this.player2
    );
    this.lobby.createTournamentBO3(predicate);
  }
  createTournamentBO5() {
    let tierToPredicate: string[] = [];
    this.tiers.forEach((tier, i) => {
      if (tier) {
        tierToPredicate.push(
          this.lobby.availablePredicates.tiers[
            this.lobby.availablePredicates.pools.indexOf(this.pool)
          ][i]
        );
      }
    });
    let stylesToPredicate: string[] = [];
    this.styles.forEach((style, i) => {
      if (style) {
        stylesToPredicate.push(
          this.lobby.availablePredicates.styles[
            this.lobby.availablePredicates.pools.indexOf(this.pool)
          ][i]
        );
      }
    });
    let predicate: PredicateDto = new PredicateDto(
      this.pool,
      tierToPredicate,
      stylesToPredicate,
      this.player1,
      this.player2
    );
    this.lobby.createTournamentBO5(predicate);
  }
  createTournamentBO5WithoutReroll() {
    let tierToPredicate: string[] = [];
    this.tiers.forEach((tier, i) => {
      if (tier) {
        tierToPredicate.push(
          this.lobby.availablePredicates.tiers[
            this.lobby.availablePredicates.pools.indexOf(this.pool)
          ][i]
        );
      }
    });
    let stylesToPredicate: string[] = [];
    this.styles.forEach((style, i) => {
      if (style) {
        stylesToPredicate.push(
          this.lobby.availablePredicates.styles[
            this.lobby.availablePredicates.pools.indexOf(this.pool)
          ][i]
        );
      }
    });
    let predicate: PredicateDto = new PredicateDto(
      this.pool,
      tierToPredicate,
      stylesToPredicate,
      this.player1,
      this.player2
    );
    this.lobby.createTournamentBO5WithoutReroll(predicate);
  }
}
