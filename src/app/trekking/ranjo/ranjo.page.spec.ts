import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RanjoPage } from './ranjo.page';

describe('RanjoPage', () => {
  let component: RanjoPage;
  let fixture: ComponentFixture<RanjoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RanjoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RanjoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
