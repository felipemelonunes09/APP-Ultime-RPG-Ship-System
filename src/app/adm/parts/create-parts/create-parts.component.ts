import { Component, OnInit } from '@angular/core';
import { PartsService } from '../parts.service';
import Swal from 'sweetalert2'
import { MyAlert } from 'src/app/shared/utils/warning';


@Component({
  selector: 'app-create-parts',
  templateUrl: './create-parts.component.html',
  styleUrls: ['./create-parts.component.css']
})
export class CreatePartsComponent implements OnInit {

  constructor(private partsService: PartsService) { }

  public loading = false

  ngOnInit(): void {
    
  }

  create(values: any) : any {

    this.loading = true
    console.log(values)
    this.partsService.create( JSON.parse(values) ).subscribe(
      res => { 
        MyAlert.createdToast('Part created, good job')
        this.loading = false
      },
      err => { 
        this.loading = false
        MyAlert.show(err.status, err?.error?.message)
      }
    )
  }

}
