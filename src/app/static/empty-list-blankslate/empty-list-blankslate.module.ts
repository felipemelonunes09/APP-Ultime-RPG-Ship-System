import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyListBlankslateComponent } from './empty-list-blankslate.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [EmptyListBlankslateComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [EmptyListBlankslateComponent]
})
export class EmptyListBlankslateModule { }
