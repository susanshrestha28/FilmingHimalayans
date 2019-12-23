import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnapurnaPage } from './annapurna.page';

describe('AnnapurnaPage', () => {
  let component: AnnapurnaPage;
  let fixture: ComponentFixture<AnnapurnaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnapurnaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnapurnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
