import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MardiPage } from './mardi.page';

describe('MardiPage', () => {
  let component: MardiPage;
  let fixture: ComponentFixture<MardiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MardiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MardiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
