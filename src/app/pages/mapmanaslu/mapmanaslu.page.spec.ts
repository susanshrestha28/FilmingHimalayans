import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapmanasluPage } from './mapmanaslu.page';

describe('MapmanasluPage', () => {
  let component: MapmanasluPage;
  let fixture: ComponentFixture<MapmanasluPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapmanasluPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapmanasluPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
