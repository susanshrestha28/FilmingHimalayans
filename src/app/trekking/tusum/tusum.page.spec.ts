import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TusumPage } from './tusum.page';

describe('TusumPage', () => {
  let component: TusumPage;
  let fixture: ComponentFixture<TusumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TusumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TusumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
