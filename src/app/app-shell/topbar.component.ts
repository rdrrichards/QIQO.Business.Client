import { Component, OnInit } from '@angular/core';
import { AppShellComponent } from './app-shell.component';

@Component({
  selector: 'qiqo-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public app: AppShellComponent) { }

  ngOnInit() {
  }

}
