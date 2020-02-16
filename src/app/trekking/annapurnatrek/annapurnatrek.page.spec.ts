import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnapurnatrekPage } from './annapurnatrek.page';

describe('AnnapurnatrekPage', () => {
  let component: AnnapurnatrekPage;
  let fixture: ComponentFixture<AnnapurnatrekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnapurnatrekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnapurnatrekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
