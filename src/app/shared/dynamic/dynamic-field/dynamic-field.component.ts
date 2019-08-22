import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldDefinition } from '../field-definition';

@Component({
  selector: 'qiqo-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent {
  @Input() field: FieldDefinition;
  @Input() form: FormGroup;
  @Input() operation: string;
  @Input() submitted: boolean;

  get isValid() { return this.form.controls[this.field.key].valid; }
  get isReadOnly() { return this.operation === 'details' || this.field.isId; }
  get isInvalid() { return this.form.controls[this.field.key].hasError('required') &&
    (this.submitted || this.form.controls[this.field.key].touched); }

  constructor() { }
}
