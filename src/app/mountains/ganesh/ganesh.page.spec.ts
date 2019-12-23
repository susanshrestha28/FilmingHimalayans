import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaneshPage } from './ganesh.page';

describe('GaneshPage', () => {
  let component: GaneshPage;
  let fixture: ComponentFixture<GaneshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaneshPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaneshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
