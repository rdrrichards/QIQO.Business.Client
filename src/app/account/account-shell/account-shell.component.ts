import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';
import { EntityType, SearchResult } from 'src/app/models';
import { Store, select } from '@ngrx/store';
import { AccountState } from '../state';
import * as accountReducer from '../state/account.reducer';

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
  }
  onNewResults(event: SearchResult[]) {
    this.searchResults = event;
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
