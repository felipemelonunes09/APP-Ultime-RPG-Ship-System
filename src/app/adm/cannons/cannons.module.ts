import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CannonsComponent } from './cannons.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmptyListBlankslateComponent } from 'src/app/static/empty-list-blankslate/empty-list-blankslate.component';
import { EmptyListBlankslateModule } from 'src/app/static/empty-list-blankslate/empty-list-blankslate.module';



@NgModule({
  declarations: [
    CannonsComponent
  ],
  imports: [
    EmptyListBlankslateModule,
    CommonModule,
    BrowserModule
  ]
})
export class CannonsModule { }
