import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  get currentField() { return this.form.controls[this.field.key]; }
  get isValid() { return this.currentField.valid; }
  get isReadOnly() { return this.operation === 'details' || this.field.isId; }
  get isInvalid() { return (this.currentField.hasError('required') ||
      this.currentField.hasError('requiredtrue') ||
      this.currentField.hasError('maxlength') ||
      this.currentField.hasError('minlength') ||
      this.currentField.hasError('min') ||
      this.currentField.hasError('max') ||
      this.currentField.hasError('email')) &&
    (this.submitted || this.currentField.touched); }
  get invalidMessage() {
    if (this.currentField.hasError('required')) {
      return `${this.field.label} is required`;
    }
    if (this.currentField.hasError('requiredtrue')) {
      return `${this.field.label} is required to be selected (or true)`;
    }
    if (this.currentField.hasError('maxlength')) {
      const err = this.currentField.getError('maxlength');
      return `${this.field.label} is too long. The maximum length is ${err.requiredLength}. The current length is ${err.actualLength}.`;
    }
    if (this.currentField.hasError('minlength')) {
      const err = this.currentField.getError('maxlength');
      return `${this.field.label} is too short. The minimum length is ${err.requiredLength}. The current length is ${err.actualLength}.`;
    }
    if (this.currentField.hasError('max')) {
      const err = this.currentField.getError('max');
      return `${this.field.label} value is too high. The maximum value is ${err.max}. The current value is ${err.actual}.`;
    }
    if (this.currentField.hasError('min')) {
      const err = this.currentField.getError('min');
      return `${this.field.label} value is too low. The minimum value is ${err.min}. The current low is ${err.actual}.`;
    }
    if (this.currentField.hasError('email')) {
      return `${this.field.label} is not a valid email`;
    }
    return `${this.field.label} is invalid`;
  }
}
