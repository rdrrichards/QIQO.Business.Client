import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'qiqo-quick-create',
  templateUrl: './quick-create.component.html',
  styleUrls: ['./quick-create.component.css']
})
export class QuickCreateComponent implements OnInit {
  @Output() qcClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  create() {
    this.qcClick.emit();
  }
}
