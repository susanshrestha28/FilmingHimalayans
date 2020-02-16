import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GokyoPage } from './gokyo.page';

describe('GokyoPage', () => {
  let component: GokyoPage;
  let fixture: ComponentFixture<GokyoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GokyoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GokyoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
