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
  fieldWidth?: string;
}
