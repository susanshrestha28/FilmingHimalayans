import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManasluPage } from './manaslu.page';

describe('ManasluPage', () => {
  let component: ManasluPage;
  let fixture: ComponentFixture<ManasluPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManasluPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManasluPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
