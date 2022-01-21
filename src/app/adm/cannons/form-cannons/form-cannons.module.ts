import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppFieldControlMsgModule } from "src/app/static/app-field-control-msg/app-field-control-msg.module";
import { FormCannonsComponent } from "./form-cannons.component";

@NgModule({
  declarations: [
      FormCannonsComponent
  ],
  imports: [
      ReactiveFormsModule,
      CommonModule,
      BrowserModule,
      AppFieldControlMsgModule
  ],
  exports: [FormCannonsComponent]
})
export class FormCannonsModule { }
