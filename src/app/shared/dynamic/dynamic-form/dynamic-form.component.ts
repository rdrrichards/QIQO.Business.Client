import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Location, DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FieldDefinition } from '../field-definition';

@Component({
  selector: 'qiqo-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges, OnInit {

  @Input() vm: any;
  @Input() vmDefinition: Array<FieldDefinition>;
  @Input() operation: string;
  @Input() errorMessage: string;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() changed: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  status: string;
  submitted = false;
  vmCopy: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private datePipe: DatePipe) { }

  clearForm() {
    const group: any = {};
    const disabled = !(this.operation === 'edit' || this.operation === 'create');
    this.vmCopy = Object.assign({}, this.vm);
    this.vmDefinition.forEach(field => {
      // console.log('field:', field);
      // console.log('this.vmCopy[field.key]:', this.vmCopy[field.key]);
      group[field.key] = field.required ? new FormControl(this.vmCopy[field.key], Validators.required)
        : new FormControl(this.vmCopy[field.key]);

      if (field.type === 'date') {
        group[field.key].reset(this.datePipe.transform(this.vmCopy[field.key], 'yyyy-MM-dd'));
      }

      group[field.key].valueChanges.subscribe((value: any) => this.onChanged([field.key, value]));

      console.log(`status: ${group[field.key].status}`);
    });
    this.form = new FormGroup(group);
    console.log(this.form);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.errorMessage.currentValue && this.status === 'waiting') {
      this.status = '';
    }
  }

  ngOnInit() {
    // this.clearForm();
    this.route.params.subscribe(params => {
      this.operation = params.operation;
      this.clearForm();
    });
  }

  onBack() {
    this.errorMessage = '';
    this.location.back();
  }

  onCancel() {
    this.onBack();
  }

  onCreate() {
    this.submitted = true;
    if (this.form.valid) {
      this.status = 'waiting';
      this.create.emit(this.form.value);
    }
  }

  onEdit() {
    this.router.navigate(['../', 'edit'], { relativeTo: this.route });
  }

  onSave() {
    this.submitted = true;
    if (this.form.valid) {
      this.status = 'waiting';
      this.update.emit(this.form.value);
    }
  }

  onChanged(arg: any) {
    // console.log(`onChanged call fired: ${arg}`);
    this.changed.emit(arg);
  }

  private isChecked(options: string[], value: string): boolean {
    if (Array.isArray(options)) {
      const f = options.find(v => v === value);
      // console.log(`isChecked: f: ${f}; option; ${options}; value: ${value}`);
      if (f) { return true; } else { return false; }
    } else {
      return false;
    }
  }
}
