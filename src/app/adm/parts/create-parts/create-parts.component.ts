import { Component, OnInit } from '@angular/core';
import { PartsService } from '../parts.service';
import Swal from 'sweetalert2'


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
      res => { console.log(res) },
      err => { 
        this.loading = false
        console.log(err)
        if (err.status == 0) { 
          
          Swal.fire({
            title: 'Hello server ? where are you  ?',
            html: 'sorry but a connection with the server could not be completed',
            icon: 'question',
            timer: 4*1000,
            background: '#0d1117'
          })
        }
        else {
          if (err.status == 400) {
            console.log(err.error.message)
              Swal.fire({
                title: 'Bad Request',
                html: `Cause: ${err.error.message}`,
                icon: 'error',
                background: '#0d1117'
              })
          }
          else {
            Swal.fire({
              title: 'Fatal error',
              html: 'We could not find the error origin, please try again later',
              icon: 'error',
              timer: 4*1000,
              background: '#0d1117'
            })
          }
        }
      }
    )
  }

}
