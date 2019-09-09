import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../shared/breadcrumb.service';

@Component({
  selector: 'qiqo-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'Companies'}
    ]);
  }

  ngOnInit() {
  }

}
