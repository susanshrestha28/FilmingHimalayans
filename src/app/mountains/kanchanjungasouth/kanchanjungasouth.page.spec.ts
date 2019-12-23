import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KanchanjungasouthPage } from './kanchanjungasouth.page';

describe('KanchanjungasouthPage', () => {
  let component: KanchanjungasouthPage;
  let fixture: ComponentFixture<KanchanjungasouthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanchanjungasouthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KanchanjungasouthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
