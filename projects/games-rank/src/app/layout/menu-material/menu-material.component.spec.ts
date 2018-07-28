
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuMaterialComponent } from './menu-material.component';

describe('MenuMaterialComponent', () => {
  let component: MenuMaterialComponent;
  let fixture: ComponentFixture<MenuMaterialComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MenuMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
