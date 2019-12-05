import { Component, OnInit, Input } from '@angular/core';
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
  searchResult$: Observable<SearchResult[]>;
  constructor(private searchService: SearchService) { }
  ngOnInit() {
  }
  search() {
    switch (this.entityType) {
      case EntityType.Account:
        this.searchResult$ = this.searchService.findAccount(this.searchTerm);
        break;
      case EntityType.Company:
        this.searchResult$ = this.searchService.findCompany(this.searchTerm);
        break;
      case EntityType.Invoice:
        this.searchResult$ = this.searchService.findInvoice(this.searchTerm);
        break;
      case EntityType.Order:
        this.searchResult$ = this.searchService.findOrder(this.searchTerm);
        break;
      case EntityType.Product:
        this.searchResult$ = this.searchService.findProduct(this.searchTerm);
        break;
      default:
        break;
    }
  }
}
