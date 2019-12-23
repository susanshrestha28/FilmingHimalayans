import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LhotshesharPage } from './lhotsheshar.page';

describe('LhotshesharPage', () => {
  let component: LhotshesharPage;
  let fixture: ComponentFixture<LhotshesharPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LhotshesharPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LhotshesharPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
