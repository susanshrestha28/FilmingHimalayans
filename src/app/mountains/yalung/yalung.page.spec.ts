import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YalungPage } from './yalung.page';

describe('YalungPage', () => {
  let component: YalungPage;
  let fixture: ComponentFixture<YalungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YalungPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YalungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
