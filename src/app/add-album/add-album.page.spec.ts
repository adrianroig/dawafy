import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAlbumPage } from './add-album.page';

describe('AddAlbumPage', () => {
  let component: AddAlbumPage;
  let fixture: ComponentFixture<AddAlbumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAlbumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
