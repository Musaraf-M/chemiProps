import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchModelPage } from './search-model.page';

describe('SearchModelPage', () => {
  let component: SearchModelPage;
  let fixture: ComponentFixture<SearchModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
