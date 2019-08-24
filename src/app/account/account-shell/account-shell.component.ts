import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/shared/account.service';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'qiqo-account-shell',
  templateUrl: './account-shell.component.html',
  styleUrls: ['./account-shell.component.css']
})
export class AccountShellComponent implements OnInit {
  account$: Observable<Account>;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    // this.accountService.getAccount(1).subscribe(account => {
    //   console.log('AccountShellComponent account', account);
    // });
    this.account$ = this.accountService.getAccount(1);
  }

}
