import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CannonsComponent } from './cannons.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmptyListBlankslateModule } from 'src/app/static/empty-list-blankslate/empty-list-blankslate.module';
import { ListCannonsComponent } from './list-cannons/list-cannons.component';
import { AppFieldControlMsgModule } from 'src/app/static/app-field-control-msg/app-field-control-msg.module';
import { CannonsRoutingModule } from './cannons.rounting.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCannonsModule } from './form-cannons/form-cannons.module';
import { CreateCannonsComponent } from './create-cannons/create-cannons.component';
import { UpdateCannonsComponent } from './update-cannons/update-cannons.component';
import { CannonService } from './cannons.service';

@NgModule({
  declarations: [
    CreateCannonsComponent,
    ListCannonsComponent,
    CannonsComponent,
    UpdateCannonsComponent
  ],
  providers: [CannonService],
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
