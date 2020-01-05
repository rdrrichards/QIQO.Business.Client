import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountShellComponent } from './account-shell.component';
import { AccountComponent } from '../account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import * as fromAccountState from '../state/account.reducer';
import { DatePipe } from '@angular/common';

describe('AccountShellComponent', () => {
  let component: AccountShellComponent;
  let fixture: ComponentFixture<AccountShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountShellComponent, AccountComponent ],
      imports: [ReactiveFormsModule, SharedModule,
        HttpClientModule, RouterTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('accountState', fromAccountState.reducer)
      ],
      providers: [DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
