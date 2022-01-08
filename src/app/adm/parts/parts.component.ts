import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

  public parts: any = [
    {
      health: 100,
      ranking: 1,
      name: 'Mastro de fragrata 1',
      tipo: 'Mastro'

    }, 
    {

    }, 
    {

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  isPartsEmpty() : Boolean {
    return this.parts.length == 0
  }

}
