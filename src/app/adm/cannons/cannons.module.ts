import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CannonsComponent } from './cannons.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmptyListBlankslateModule } from 'src/app/static/empty-list-blankslate/empty-list-blankslate.module';
import { ListCannonsComponent } from './list-cannons/list-cannons.component';
import { FormCannonsComponent } from './form-cannons/form-cannons.component';
import { AppFieldControlMsgModule } from 'src/app/static/app-field-control-msg/app-field-control-msg.module';
import { CannonsRoutingModule } from './cannons.rounting.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCannonsModule } from './form-cannons/form-cannons.module';

@NgModule({
  declarations: [
    CannonsComponent,
    ListCannonsComponent,
    FormCannonsComponent
  ],
  imports: [
    AppFieldControlMsgModule,
    EmptyListBlankslateModule,
    CannonsRoutingModule,
    FormCannonsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule
  ]
})
export class CannonsModule { }
