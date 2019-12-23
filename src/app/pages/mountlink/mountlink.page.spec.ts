import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MountlinkPage } from './mountlink.page';

describe('MountlinkPage', () => {
  let component: MountlinkPage;
  let fixture: ComponentFixture<MountlinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountlinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MountlinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
