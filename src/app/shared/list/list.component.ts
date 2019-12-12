import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from 'src/app/models';

@Component({
  selector: 'qiqo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() results: SearchResult[];
  selectedItem: any;
  cols = [
    { field: 'code', header: 'Code', width: '15%' },
    { field: 'name', header: 'Name', width: '25%' },
    { field: 'note', header: 'Note', width: '45%' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
