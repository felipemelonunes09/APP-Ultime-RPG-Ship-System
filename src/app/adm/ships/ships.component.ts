import { Component, OnInit } from '@angular/core';
import { ShipService } from './ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  ships: any = [];
  constructor(private shipService: ShipService) { }

  ngOnInit(): void {
    this.getAll();
  }

  isPartsEmpty() : Boolean {
    return this.ships.length == 0;
  }

  getAll() {
    this.shipService.getAll().subscribe((ships: any) => {
      console.log(ships);
      
      this.ships = ships.object;
     });
  }

  getById(id: number) {
    this.shipService.getById(id).subscribe((ships: any) => {
      console.log(ships);
     });
  }

  create(data: any) {
    this.shipService.create(data).subscribe((ships: any) => {
      console.log(ships);
     });
  }

  update(data: any) {
    this.shipService.update(data).subscribe((ships: any) => {
      console.log(ships);
     });
  }

  delete(id: number) {
    this.shipService.delete(id).subscribe((ships: any) => {
      console.log(ships);
     });
  }
}
