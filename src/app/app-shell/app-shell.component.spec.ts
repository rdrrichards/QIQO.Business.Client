import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShellComponent } from './app-shell.component';
import { TopbarComponent } from './topbar.component';
import { InlineProfileComponent } from './inline-profile.component';
import { BreadcrumbComponent } from './breadcrumb.component';
import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer.component';
import { SubMenuComponent } from './sub-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppShellComponent', () => {
  let component: AppShellComponent;
  let fixture: ComponentFixture<AppShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShellComponent, TopbarComponent, FooterComponent,
        InlineProfileComponent, BreadcrumbComponent, MenuComponent, TopbarComponent,
        SubMenuComponent ],
      imports: [ RouterTestingModule, SharedModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
