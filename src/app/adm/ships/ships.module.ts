import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { EmptyListBlankslateModule } from 'src/app/static/empty-list-blankslate/empty-list-blankslate.module';
import { AppFieldControlMsgModule } from 'src/app/static/app-field-control-msg/app-field-control-msg.module';
import { ShipsRoutingModule } from './ships.routing.module';
import { ShipsComponent } from './ships.component';


@NgModule({
  declarations: [
    ShipsComponent,
  ],
  imports: [
    AppFieldControlMsgModule,
    EmptyListBlankslateModule,
    ShipsRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule
  ]
})
export class PartsModule { }
