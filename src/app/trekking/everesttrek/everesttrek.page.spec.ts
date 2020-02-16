import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EveresttrekPage } from './everesttrek.page';

describe('EveresttrekPage', () => {
  let component: EveresttrekPage;
  let fixture: ComponentFixture<EveresttrekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EveresttrekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EveresttrekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
