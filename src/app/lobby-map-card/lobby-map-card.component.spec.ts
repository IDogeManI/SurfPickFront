import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyMapCardComponent } from './lobby-map-card.component';

describe('LobbyMapCardComponent', () => {
  let component: LobbyMapCardComponent;
  let fixture: ComponentFixture<LobbyMapCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LobbyMapCardComponent]
    });
    fixture = TestBed.createComponent(LobbyMapCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
