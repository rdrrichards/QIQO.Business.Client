import { SelectItem } from 'primeng/api';
import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export interface FieldDefinition {
  key: string;
  type: string;
  isId?: boolean;
  label?: string;
  required?: boolean;
  options?: SelectItem[];
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
}

// class Validators {
//   static min(min: number): ValidatorFn
//   static max(max: number): ValidatorFn
//   static required(control: AbstractControl): ValidationErrors | null
//   static requiredTrue(control: AbstractControl): ValidationErrors | null
//   static email(control: AbstractControl): ValidationErrors | null
//   static minLength(minLength: number): ValidatorFn
//   static maxLength(maxLength: number): ValidatorFn
//   static pattern(pattern: string | RegExp): ValidatorFn
//   static nullValidator(control: AbstractControl): ValidationErrors | null
//   static compose(validators: ValidatorFn[]): ValidatorFn | null
//   static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null
// }
