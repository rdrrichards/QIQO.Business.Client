import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountShellComponent } from './account-shell.component';
import { AccountComponent } from '../account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccountShellComponent', () => {
  let component: AccountShellComponent;
  let fixture: ComponentFixture<AccountShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountShellComponent, AccountComponent ],
      imports: [ReactiveFormsModule, SharedModule, HttpClientModule, RouterTestingModule]
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
