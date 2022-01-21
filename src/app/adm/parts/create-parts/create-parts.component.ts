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
    this.partsService.create( JSON.parse(values) ).subscribe(
      res => { console.log(res) },
      err => { 
        this.loading = false
        Swal.fire({
          title: 'Alo servidor ? cade você ?',
          html: 'Desculpa mas infelizmente o servidor me deixou no vácuo, verifique o seu meio de comunicação com a internet',
          icon: 'question',
          timer: 3*1000,
          background: '#0d1117'
        })
      }
    )
  }

}
