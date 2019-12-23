import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EverestPage } from './everest.page';

describe('EverestPage', () => {
  let component: EverestPage;
  let fixture: ComponentFixture<EverestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EverestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EverestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
