import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryPortifolioComponent } from './library-portifolio.component';

describe('LibraryPortifolioComponent', () => {
  let component: LibraryPortifolioComponent;
  let fixture: ComponentFixture<LibraryPortifolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryPortifolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryPortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
