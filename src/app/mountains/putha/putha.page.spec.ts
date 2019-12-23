import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuthaPage } from './putha.page';

describe('PuthaPage', () => {
  let component: PuthaPage;
  let fixture: ComponentFixture<PuthaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuthaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuthaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
