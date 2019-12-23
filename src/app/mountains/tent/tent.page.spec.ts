import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TentPage } from './tent.page';

describe('TentPage', () => {
  let component: TentPage;
  let fixture: ComponentFixture<TentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
