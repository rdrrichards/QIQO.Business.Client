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

      if (field.type === 'select' || field.type === 'boolean') {
        group[field.key].reset({ value: this.vmCopy[field.key], disabled });
        const element = document.getElementById(field.key) as HTMLSelectElement;
        if (element) { element.disabled = disabled; }
      }

      if (field.type === 'single-choice') {
        // console.log('Disabling single-choice');
        group[field.key].reset({ value: this.vmCopy[field.key], disabled });

        const scElements = document.querySelectorAll('.single-choice');
        for (let i = 0; i < scElements.length; i++) {
          // console.log(`single-choice element ${i} ${typeof sc_elements[i]}`);
          const e = scElements[i] as HTMLInputElement;
          if (e) { e.disabled = disabled; }
        }
      }

      if (field.type === 'multi-choice') {
        // loop through the field.options
        // create a new FormControl for each option
        // set the value to true or false if the option value exists in the this.vmCopy[field.key] array
        // add the FormControl to a FormArray
        // set the group[field.key] as the FormArray
        const cbArray: any = {}; // new FormArray([]);
        field.options!.forEach(opt => {
          cbArray[opt.value] = new FormControl({ value: this.isChecked(this.vmCopy[field.key], opt.value), disabled });
        });
        group[field.key] = new FormGroup(cbArray);

        const mcElements = document.querySelectorAll('.multi-choice');
        for (let i = 0; i < mcElements.length; i++) {
          // console.log(`single-choice element ${i} ${typeof mc_elements[i]}`);
          const e = mcElements[i] as HTMLInputElement;
          if (e) {
            e.checked = false;
            e.disabled = disabled;
          }
        }
      }

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
