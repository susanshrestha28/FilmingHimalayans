import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaplinkPage } from './maplink.page';

describe('MaplinkPage', () => {
  let component: MaplinkPage;
  let fixture: ComponentFixture<MaplinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaplinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaplinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
