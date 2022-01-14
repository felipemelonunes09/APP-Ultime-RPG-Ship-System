import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PartsService } from '../parts.service';

@Component({
  selector: 'app-form-parts',
  templateUrl: './form-parts.component.html',
  styleUrls: ['./form-parts.component.css']
})
export class FormPartsComponent implements OnInit {

  form!: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private partsServive: PartsService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null],
      health: [null],
      ranking: [null],
      description: [null]
    })
  }

  public onSubmit() {
    console.log(this.form)
  }

  public getRank() {
    return this.partsServive.ranking
  }

}
