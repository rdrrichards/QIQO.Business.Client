import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from 'src/app/models';

@Component({
  selector: 'qiqo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() results: SearchResult[];
  constructor() { }

  ngOnInit() {
  }

}
