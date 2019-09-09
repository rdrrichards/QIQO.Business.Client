import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CalendarModule,
    CheckboxModule,
    ColorPickerModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    RadioButtonModule,
    ScrollPanelModule,
    TableModule
  ],
  exports: [
    CalendarModule,
    CheckboxModule,
    ColorPickerModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    RadioButtonModule,
    ScrollPanelModule,
    TableModule
  ]
})
export class PrimeNgModule { }
