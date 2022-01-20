import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataModelService } from 'src/utils/datamodel.service';
import { CannonService } from '../cannons.service';

@Component({
  selector: 'app-form-cannons',
  templateUrl: './form-cannons.component.html',
  styleUrls: ['./form-cannons.component.css']
})
export class FormCannonsComponent implements OnInit {

  form!: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private readonly dataModelService: DataModelService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      damage: [null,  [Validators.required]],
      ranking: [null,  Validators.required],
      range: [null,  Validators.required],
      description: [null, Validators.required]
    })
  }

  public onSubmit() {
    this.form.reset()
  }

  public getRank() {
    return this.dataModelService.ranking
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
