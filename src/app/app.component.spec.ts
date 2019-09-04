import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppShellComponent } from './app-shell/app-shell.component';
import { TopbarComponent } from './app-shell/topbar.component';
import { FooterComponent } from './app-shell/footer.component';
import { InlineProfileComponent } from './app-shell/inline-profile.component';
import { BreadcrumbComponent } from './app-shell/breadcrumb.component';
import { MenuComponent } from './app-shell/menu.component';
import { SharedModule } from './shared/shared.module';
import { SubMenuComponent } from './app-shell/sub-menu.component';
import { LoginComponent } from './login/login.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      declarations: [
        AppComponent, AppShellComponent, TopbarComponent, FooterComponent,
        InlineProfileComponent, BreadcrumbComponent, MenuComponent, TopbarComponent,
        SubMenuComponent, LoginComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'QIQO Business Client'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('QIQO Business Client');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to QIQO Business Client!');
  // });
});
