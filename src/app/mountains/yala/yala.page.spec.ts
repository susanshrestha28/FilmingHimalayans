import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YalaPage } from './yala.page';

describe('YalaPage', () => {
  let component: YalaPage;
  let fixture: ComponentFixture<YalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
