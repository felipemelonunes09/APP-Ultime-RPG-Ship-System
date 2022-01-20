import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PartsService } from '../parts.service';

@Component({
  selector: 'app-form-parts',
  templateUrl: './form-parts.component.html',
  styleUrls: ['./form-parts.component.css']
})
export class FormPartsComponent implements OnInit {

  form!: FormGroup; 

  @Output() submitted = new EventEmitter()

  constructor(
    private formBuilder: FormBuilder,
    private partsServive: PartsService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      health: [null,  [Validators.required]],
      ranking: [null,  Validators.required],
      description: [null, Validators.required]
    })
  }

  public onSubmit() {
    this.submitted.emit(JSON.stringify(this.form.value))
    this.form.reset()
  }

  public getRank() {
    return this.partsServive.ranking
  }

  public getValidAndTouched(field: string) : any {
    if (this.form.get(field)?.touched == true) { 
      if (this.form.get(field)?.valid == false) {
        return true
      }
    }
    return false
  }

  public getCss(field: string) {
    let is: any = this.getValidAndTouched(field)
    return {
      'errored':  is,
      'successed': !is
    }
  }

  public isVisible(field: string) {
    return this.form.get(field)?.touched
  }

}
