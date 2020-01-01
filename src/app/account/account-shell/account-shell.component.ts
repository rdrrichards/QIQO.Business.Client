import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';
import { EntityType, SearchResult } from 'src/app/models';
import { Store, select } from '@ngrx/store';
import { AccountState } from '../state';
import * as accountReducer from '../state/account.reducer';
import * as accountActions from '../state/account.actions';

@Component({
  selector: 'qiqo-account-shell',
  templateUrl: './account-shell.component.html',
  styleUrls: ['./account-shell.component.css']
})
export class AccountShellComponent implements OnInit {
  account$: Observable<Account>;
  EntityType = EntityType;
  searchResults: SearchResult[];
  showQuickCreateDialog = false;
  constructor(private breadcrumbService: BreadcrumbService, private accountStore: Store<AccountState>) {
    this.breadcrumbService.setItems([
      {label: 'Account'}
    ]);
  }

  ngOnInit() {
    this.account$ = this.accountStore.pipe(select(accountReducer.selectCurrentAccount));
    this.accountStore.pipe(select(accountReducer.selectFoundAccounts)).subscribe(accounts => {
      console.log('ngOnInit accounts', accounts);
      if (accounts  && accounts.length > 0) {
        this.searchResults = accounts.map(a => ({ code: a.accountCode, name: a.accountName, note: '' } as SearchResult));
      }
    })
  }
  onNewResults(event: SearchResult[]) {
    this.searchResults = event;
    console.log('onNewResults event', event);
    const accounts = event.map(e => ({ accountCode: e.code, accountName: e.name } as Account));
    this.accountStore.dispatch(accountActions.findAccountSuccess({ payload: accounts.length > 0 ? accounts : [] }));
  }
  showAccountQuickCreate() {
    console.log('showAccountQuickCreate...');
    this.showQuickCreateDialog = true;
  }
  test() {
    console.log('test...');
    this.showQuickCreateDialog = false;
  }
}
