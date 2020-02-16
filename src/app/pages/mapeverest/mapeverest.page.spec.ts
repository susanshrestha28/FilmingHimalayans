import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapeverestPage } from './mapeverest.page';

describe('MapeverestPage', () => {
  let component: MapeverestPage;
  let fixture: ComponentFixture<MapeverestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapeverestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapeverestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
