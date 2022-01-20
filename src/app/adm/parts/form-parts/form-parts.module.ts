import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppFieldControlMsgModule } from "src/app/static/app-field-control-msg/app-field-control-msg.module";
import { FormPartsComponent } from "./form-parts.component";

@NgModule({
  declarations: [
      FormPartsComponent
  ],
  imports: [
      ReactiveFormsModule,
      CommonModule,
      BrowserModule,
      AppFieldControlMsgModule
  ],
  exports: [FormPartsComponent]
})
export class FormPartsModule { }
