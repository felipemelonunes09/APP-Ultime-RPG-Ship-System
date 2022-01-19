import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyListBlankslateComponent } from './empty-list-blankslate.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppFieldControlMsgComponent } from '../app-field-control-msg/app-field-control-msg.component';



@NgModule({
  declarations: [EmptyListBlankslateComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [EmptyListBlankslateComponent]
})
export class EmptyListBlankslateModule { }
