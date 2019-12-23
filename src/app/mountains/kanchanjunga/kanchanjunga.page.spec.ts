import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KanchanjungaPage } from './kanchanjunga.page';

describe('KanchanjungaPage', () => {
  let component: KanchanjungaPage;
  let fixture: ComponentFixture<KanchanjungaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanchanjungaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KanchanjungaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
