import { OptionDefinition } from './option-defninition';

export interface FieldDefinition {
  key: string;
  type: string;
  isId?: boolean;
  label: string;
  required?: boolean;
  options?: OptionDefinition[];
}
