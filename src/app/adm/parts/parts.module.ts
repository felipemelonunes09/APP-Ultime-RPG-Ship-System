import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPartsComponent } from './list-parts/list-parts.component';
import { FormPartsComponent } from './form-parts/form-parts.component';
import { BrowserModule } from '@angular/platform-browser';
import { PartsComponent } from './parts.component';
import { PartsRoutingModule } from './parts.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmptyListBlankslateModule } from 'src/app/static/empty-list-blankslate/empty-list-blankslate.module';
import { AppFieldControlMsgModule } from 'src/app/static/app-field-control-msg/app-field-control-msg.module';


@NgModule({
  declarations: [
    PartsComponent,
    ListPartsComponent,
    FormPartsComponent
  ],
  imports: [
    AppFieldControlMsgModule,
    EmptyListBlankslateModule,
    PartsRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule
  ]
})
export class PartsModule { }
