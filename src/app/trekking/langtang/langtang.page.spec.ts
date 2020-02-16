import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LangtangPage } from './langtang.page';

describe('LangtangPage', () => {
  let component: LangtangPage;
  let fixture: ComponentFixture<LangtangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangtangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LangtangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
