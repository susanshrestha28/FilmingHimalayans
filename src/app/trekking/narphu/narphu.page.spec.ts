import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NarphuPage } from './narphu.page';

describe('NarphuPage', () => {
  let component: NarphuPage;
  let fixture: ComponentFixture<NarphuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarphuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NarphuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
