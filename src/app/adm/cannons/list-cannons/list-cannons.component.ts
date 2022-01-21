import { Component, OnInit } from '@angular/core';
import { CannonService } from '../cannons.service';

@Component({
  selector: 'app-list-cannons',
  templateUrl: './list-cannons.component.html',
  styleUrls: ['./list-cannons.component.css']
})
export class ListCannonsComponent implements OnInit {

  cannons: any = [];
  constructor(private cannonService: CannonService) { }

  ngOnInit(): void {
    this.getAll();
  }

  isPartsEmpty() : Boolean {
    return this.cannons.length == 0
  }

  getAll() {
    this.cannonService.getAll().subscribe((cannons: any) => {
      this.cannons = cannons.objects;
     });
  }

  getById(id: number) {
    this.cannonService.getById(id).subscribe((cannons: any) => {
      console.log(cannons);
     });
  }

  delete(id: number) {
    this.cannonService.delete(id).subscribe((cannons: any) => {
      console.log(cannons);
     });
  }
}
