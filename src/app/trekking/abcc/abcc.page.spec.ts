import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ABCCPage } from './abcc.page';

describe('ABCCPage', () => {
  let component: ABCCPage;
  let fixture: ComponentFixture<ABCCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABCCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ABCCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
