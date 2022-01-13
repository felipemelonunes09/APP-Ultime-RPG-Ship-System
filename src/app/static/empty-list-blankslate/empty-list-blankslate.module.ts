import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyListBlankslateComponent } from './empty-list-blankslate.component';



@NgModule({
  declarations: [EmptyListBlankslateComponent],
  imports: [
    CommonModule
  ],
  exports: [EmptyListBlankslateComponent]
})
export class EmptyListBlankslateModule { }
