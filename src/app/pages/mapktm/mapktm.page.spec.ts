import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapktmPage } from './mapktm.page';

describe('MapktmPage', () => {
  let component: MapktmPage;
  let fixture: ComponentFixture<MapktmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapktmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapktmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
