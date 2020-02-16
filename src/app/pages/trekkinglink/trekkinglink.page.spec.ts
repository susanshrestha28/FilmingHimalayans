import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrekkinglinkPage } from './trekkinglink.page';

describe('TrekkinglinkPage', () => {
  let component: TrekkinglinkPage;
  let fixture: ComponentFixture<TrekkinglinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekkinglinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrekkinglinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
