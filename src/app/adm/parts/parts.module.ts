import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPartsComponent } from './list-parts/list-parts.component';
import { BrowserModule } from '@angular/platform-browser';
import { PartsComponent } from './parts.component';
import { PartsRoutingModule } from './parts.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmptyListBlankslateModule } from 'src/app/static/empty-list-blankslate/empty-list-blankslate.module';
import { AppFieldControlMsgModule } from 'src/app/static/app-field-control-msg/app-field-control-msg.module';
import { FormPartsModule } from './form-parts/form-parts.module';
import { CreatePartsComponent } from './create-parts/create-parts.component';
import { UpdatePartsComponent } from './update-parts/update-parts.component';
import { PartsService } from './parts.service';

@NgModule({
  declarations: [
    CreatePartsComponent,
    UpdatePartsComponent,
    PartsComponent,
    ListPartsComponent
  ],
  providers: [PartsService],
  imports: [

    AppFieldControlMsgModule,
    EmptyListBlankslateModule,

    PartsRoutingModule,
    FormPartsModule,

    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    
  ]
})
export class PartsModule { }
