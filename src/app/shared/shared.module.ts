import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { AttributeComponent } from './attribute/attribute.component';
import { CommentComponent } from './comment/comment.component';
import { FeeScheduleComponent } from './fee-schedule/fee-schedule.component';
import { ListComponent } from './list/list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { BusyComponent } from './busy/busy.component';
import { SearchComponent } from './search/search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DynamicFormComponent } from './dynamic/dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './dynamic/dynamic-field/dynamic-field.component';
import { PrimeNgModule } from './primeng.module';
import { QuickCreateComponent } from './quick-create/quick-create.component';
import { QuickCreateDialogComponent } from './quick-create/quick-create-dialog.component';

@NgModule({
  declarations: [
    AddressComponent,
    AttributeComponent,
    CommentComponent,
    FeeScheduleComponent,
    ListComponent,
    ListDetailComponent,
    BusyComponent,
    SearchComponent,
    NavigationComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    QuickCreateComponent,
    QuickCreateDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
  ],
  exports: [
    AddressComponent,
    AttributeComponent,
    CommentComponent,
    FeeScheduleComponent,
    ListComponent,
    ListDetailComponent,
    BusyComponent,
    SearchComponent,
    NavigationComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    QuickCreateComponent,
    QuickCreateDialogComponent,
    FormsModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
