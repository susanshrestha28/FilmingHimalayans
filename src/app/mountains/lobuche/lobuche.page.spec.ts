import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LobuchePage } from './lobuche.page';

describe('LobuchePage', () => {
  let component: LobuchePage;
  let fixture: ComponentFixture<LobuchePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobuchePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LobuchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
