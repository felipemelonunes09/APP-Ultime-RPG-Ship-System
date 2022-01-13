import { Component, OnInit } from '@angular/core';
import { CannonService } from './cannons.service';

@Component({
  selector: 'app-cannons',
  templateUrl: './cannons.component.html',
  styleUrls: ['./cannons.component.css']
})
export class CannonsComponent implements OnInit {
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

  create(data: any) {
    this.cannonService.create(data).subscribe((cannons: any) => {
      console.log(cannons);
     });
  }

  update(data: any) {
    this.cannonService.update(data).subscribe((cannons: any) => {
      console.log(cannons);
     });
  }

  delete(id: number) {
    this.cannonService.delete(id).subscribe((cannons: any) => {
      console.log(cannons);
     });
  }
}
