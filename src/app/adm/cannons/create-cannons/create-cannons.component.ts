import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CannonService } from '../cannons.service';

@Component({
  selector: 'app-create-cannons',
  templateUrl: './create-cannons.component.html',
  styleUrls: ['./create-cannons.component.css']
})
export class CreateCannonsComponent implements OnInit {

  constructor(private cannonsService: CannonService) { }

  ngOnInit(): void {
  }

  create(values: any) : any {
    console.log(values)
    this.cannonsService.create( JSON.parse(values) ).subscribe(
      res => { console.log('Responsa feito'); console.log(res) },
      err => { 
        Swal.fire('Alo servidor ? tá ai mano ?', 'Ala mano o servidor me deixou no vácuo aqui :(', 'question')
       }
    )
  }
}
