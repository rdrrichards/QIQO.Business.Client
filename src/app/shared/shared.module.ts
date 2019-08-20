import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { AttributeComponent } from './attribute/attribute.component';
import { CommentComponent } from './comment/comment.component';
import { FeeScheduleComponent } from './fee-schedule/fee-schedule.component';
import { ListComponent } from './list/list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { BusyComponent } from './busy/busy.component';
import { SearchComponent } from './search/search.component';
import { NavigationComponent } from './navigation/navigation.component';

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
    NavigationComponent
  ],
  imports: [
    CommonModule
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
    NavigationComponent
  ]
})
export class SharedModule { }
