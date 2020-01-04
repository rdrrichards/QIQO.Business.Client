import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'qiqo-quick-create-dialog',
  templateUrl: './quick-create-dialog.component.html',
  styleUrls: ['./quick-create-dialog.component.css']
})
export class QuickCreateDialogComponent implements OnInit {
  @Input() display = false;
  @Input() header = 'Create';
  // @Output() save = new EventEmitter();
  // @Output() cancel = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  // onSave() {
  //   this.save.emit();
  // }
  // onCancel() {
  //   this.cancel.emit();
  // }
}
