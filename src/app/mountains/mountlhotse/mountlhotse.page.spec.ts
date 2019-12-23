import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MountlhotsePage } from './mountlhotse.page';

describe('MountlhotsePage', () => {
  let component: MountlhotsePage;
  let fixture: ComponentFixture<MountlhotsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountlhotsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MountlhotsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
