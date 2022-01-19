import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFieldControlMsgComponent } from './app-field-control-msg.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AppFieldControlMsgComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [AppFieldControlMsgComponent]
})
export class AppFieldControlMsgModule { }
