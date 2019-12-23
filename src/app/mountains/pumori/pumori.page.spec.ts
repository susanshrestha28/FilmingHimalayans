import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PumoriPage } from './pumori.page';

describe('PumoriPage', () => {
  let component: PumoriPage;
  let fixture: ComponentFixture<PumoriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PumoriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PumoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
