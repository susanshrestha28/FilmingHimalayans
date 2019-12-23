import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaldorPage } from './paldor.page';

describe('PaldorPage', () => {
  let component: PaldorPage;
  let fixture: ComponentFixture<PaldorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaldorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaldorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
