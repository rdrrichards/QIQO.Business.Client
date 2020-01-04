import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CalendarModule,
    CheckboxModule,
    ColorPickerModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    MessageModule,
    RadioButtonModule,
    ScrollPanelModule,
    TableModule,
    ToastModule
  ],
  exports: [
    CalendarModule,
    CheckboxModule,
    ColorPickerModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    MessageModule,
    RadioButtonModule,
    ScrollPanelModule,
    TableModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
