import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmaPage } from './ama.page';

describe('AmaPage', () => {
  let component: AmaPage;
  let fixture: ComponentFixture<AmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
