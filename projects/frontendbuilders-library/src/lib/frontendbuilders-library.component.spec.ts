import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendbuildersLibraryComponent } from './frontendbuilders-library.component';

describe('FrontendbuildersLibraryComponent', () => {
  let component: FrontendbuildersLibraryComponent;
  let fixture: ComponentFixture<FrontendbuildersLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendbuildersLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendbuildersLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
