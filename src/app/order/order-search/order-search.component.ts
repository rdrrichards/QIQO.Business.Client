import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qiqo-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css']
})
export class OrderSearchComponent implements OnInit {
  searchTerm: string;
  constructor() { }

  ngOnInit() {
  }
  search() {
    console.log(this.searchTerm);
  }

}
