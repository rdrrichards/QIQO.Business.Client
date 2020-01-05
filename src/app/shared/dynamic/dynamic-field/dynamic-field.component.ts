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
  get isInvalid() { return (this.form.controls[this.field.key].hasError('required') ||
      this.form.controls[this.field.key].hasError('requiredtrue') ||
      this.form.controls[this.field.key].hasError('maxlength') ||
      this.form.controls[this.field.key].hasError('minlength') ||
      this.form.controls[this.field.key].hasError('min') ||
      this.form.controls[this.field.key].hasError('max') ||
      this.form.controls[this.field.key].hasError('email')) &&
    (this.submitted || this.form.controls[this.field.key].touched); }
  get invalidMessage() {
    if (this.form.controls[this.field.key].hasError('required')) {
      return `${this.field.label} is required`;
    }
    if (this.form.controls[this.field.key].hasError('requiredtrue')) {
      return `${this.field.label} is required to be selected (or true)`;
    }
    if (this.form.controls[this.field.key].hasError('maxlength')) {
      const err = this.form.controls[this.field.key].getError('maxlength');
      return `${this.field.label} is too long. The maximum length is ${err.requiredLength}. The current length is ${err.actualLength}.`;
    }
    if (this.form.controls[this.field.key].hasError('minlength')) {
      const err = this.form.controls[this.field.key].getError('maxlength');
      return `${this.field.label} is too short. The minimum length is ${err.requiredLength}. The current length is ${err.actualLength}.`;
    }
    if (this.form.controls[this.field.key].hasError('max')) {
      const err = this.form.controls[this.field.key].getError('max');
      return `${this.field.label} value is too high. The maximum value is ${err.max}. The current value is ${err.actual}.`;
    }
    if (this.form.controls[this.field.key].hasError('min')) {
      const err = this.form.controls[this.field.key].getError('min');
      return `${this.field.label} value is too low. The minimum value is ${err.min}. The current low is ${err.actual}.`;
    }
    if (this.form.controls[this.field.key].hasError('email')) {
      return `${this.field.label} is not a valid email`;
    }
    return `${this.field.label} is invalid`;
  }
}
