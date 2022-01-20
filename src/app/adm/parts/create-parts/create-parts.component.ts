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

  ngOnInit(): void {
    
  }

  create(values: any) : any {
    console.log(values)
    this.partsService.create( JSON.parse(values) ).subscribe(
      res => { console.log('Responsa feito'); console.log(res) },
      err => { 
        Swal.fire('Alo servidor ? tá ai mano ?', 'Ala mano o servidor me deixou no vácuo aqui :(', 'question')
       }
    )
  }

}
