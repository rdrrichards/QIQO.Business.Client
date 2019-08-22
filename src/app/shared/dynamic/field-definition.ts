// import { OptionDefinition } from './option-defninition';
import { SelectItem } from 'primeng/api';

export interface FieldDefinition {
  key: string;
  type: string;
  isId?: boolean;
  label?: string;
  required?: boolean;
  options?: SelectItem[];
}
