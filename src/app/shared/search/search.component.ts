import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
import { EntityType, SearchResult } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'qiqo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  @Input() entityType: EntityType;
  @Output() newResults = new EventEmitter<SearchResult[]>();
  // searchResult$: Observable<SearchResult[]>;
  constructor(private searchService: SearchService) { }
  ngOnInit() {
  }
  search() {
    switch (this.entityType) {
      case EntityType.Account:
        this.searchService.findAccount(this.searchTerm).subscribe(results => this.newResults.emit(results));
        break;
      case EntityType.Company:
        this.searchService.findCompany(this.searchTerm).subscribe(results => this.newResults.emit(results));
        break;
      case EntityType.Invoice:
        this.searchService.findInvoice(this.searchTerm).subscribe(results => this.newResults.emit(results));
        break;
      case EntityType.Order:
        this.searchService.findOrder(this.searchTerm).subscribe(results => this.newResults.emit(results));
        break;
      case EntityType.Product:
        this.searchService.findProduct(this.searchTerm).subscribe(results => this.newResults.emit(results));
        break;
      default:
        break;
    }
  }
}
