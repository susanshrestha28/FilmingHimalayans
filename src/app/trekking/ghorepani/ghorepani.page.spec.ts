import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GhorepaniPage } from './ghorepani.page';

describe('GhorepaniPage', () => {
  let component: GhorepaniPage;
  let fixture: ComponentFixture<GhorepaniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhorepaniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GhorepaniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
