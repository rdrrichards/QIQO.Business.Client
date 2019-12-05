import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { GlobalErrorHandler } from './core/global-error-handler';
import { StoreModule } from '@ngrx/store';
import * as fromAppReducer from './state/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';
import { AppShellComponent } from './app-shell/app-shell.component';
import { TopbarComponent } from './app-shell/topbar.component';
import { FooterComponent } from './app-shell/footer.component';
import { InlineProfileComponent } from './app-shell/inline-profile.component';
import { MenuComponent } from './app-shell/menu.component';
import { SubMenuComponent } from './app-shell/sub-menu.component';
import { BreadcrumbComponent } from './app-shell/breadcrumb.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent,
    TopbarComponent,
    FooterComponent,
    InlineProfileComponent,
    MenuComponent,
    SubMenuComponent,
    BreadcrumbComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CoreModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: fromAppReducer.reducer }, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 50, logOnly: environment.production, name: 'QIQO Business Client State' })
  ],
  providers: [
    // { provide: ErrorHandler, useClass: GlobalErrorHandler },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
