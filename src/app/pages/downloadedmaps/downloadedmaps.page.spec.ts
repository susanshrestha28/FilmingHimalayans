import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownloadedmapsPage } from './downloadedmaps.page';

describe('DownloadedmapsPage', () => {
  let component: DownloadedmapsPage;
  let fixture: ComponentFixture<DownloadedmapsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadedmapsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadedmapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
