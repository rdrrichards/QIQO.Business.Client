import { Component, Input } from '@angular/core';
import { FieldDefinition } from '../field-definition';

@Component({
  selector: 'qiqo-form-field',
  template: `<div class="p-grid">
    <div class="p-col-2">
      <label [htmlFor]="field.key">{{ field.label }}</label>
    </div>
    <div class="p-col-6">
      <ng-content></ng-content>
    </div>
    <div class="p-col-4">
        <p-message severity="error" [text]="invalidMessage" *ngIf="isInvalid"></p-message>
    </div>
    </div>`
})
export class FormFieldComponent {
  @Input() field: FieldDefinition;
  @Input() invalidMessage: string;
  @Input() isInvalid: boolean;
}
