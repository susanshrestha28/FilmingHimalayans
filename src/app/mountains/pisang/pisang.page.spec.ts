import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PisangPage } from './pisang.page';

describe('PisangPage', () => {
  let component: PisangPage;
  let fixture: ComponentFixture<PisangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PisangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PisangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
