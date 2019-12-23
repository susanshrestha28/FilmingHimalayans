import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EftPage } from './eft.page';

describe('EftPage', () => {
  let component: EftPage;
  let fixture: ComponentFixture<EftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
