import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayModalPage } from './display-modal.page';

describe('DisplayModalPage', () => {
  let component: DisplayModalPage;
  let fixture: ComponentFixture<DisplayModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
