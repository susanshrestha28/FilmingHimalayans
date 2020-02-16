import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaplangtangPage } from './maplangtang.page';

describe('MaplangtangPage', () => {
  let component: MaplangtangPage;
  let fixture: ComponentFixture<MaplangtangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaplangtangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaplangtangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
