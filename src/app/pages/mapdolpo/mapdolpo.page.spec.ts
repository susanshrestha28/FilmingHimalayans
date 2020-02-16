import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapdolpoPage } from './mapdolpo.page';

describe('MapdolpoPage', () => {
  let component: MapdolpoPage;
  let fixture: ComponentFixture<MapdolpoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapdolpoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapdolpoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
