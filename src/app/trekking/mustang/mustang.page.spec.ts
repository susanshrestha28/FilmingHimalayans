import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MustangPage } from './mustang.page';

describe('MustangPage', () => {
  let component: MustangPage;
  let fixture: ComponentFixture<MustangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MustangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
