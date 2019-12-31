import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/shared/account.service';
import { Account } from 'src/app/models/account';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';
import { EntityType, SearchResult } from 'src/app/models';

@Component({
  selector: 'qiqo-account-shell',
  templateUrl: './account-shell.component.html',
  styleUrls: ['./account-shell.component.css']
})
export class AccountShellComponent implements OnInit {
  // account$: Observable<Account>;
  EntityType = EntityType;
  searchResults: SearchResult[];
  showQuickCreateDialog = false;
  constructor(private breadcrumbService: BreadcrumbService, private accountService: AccountService) {
    this.breadcrumbService.setItems([
      {label: 'Account'}
    ]);
  }

  ngOnInit() {
    // this.accountService.getAccount(1).subscribe(account => {
    //   console.log('AccountShellComponent account', account);
    // });
    // this.account$ = this.accountService.getAccount(1);
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
