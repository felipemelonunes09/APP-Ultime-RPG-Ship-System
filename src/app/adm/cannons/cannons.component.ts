import { Component, OnInit } from '@angular/core';
import { CannonService } from './cannons.service';

@Component({
  selector: 'app-cannons',
  templateUrl: './cannons.component.html',
  styleUrls: ['./cannons.component.css']
})
export class CannonsComponent implements OnInit {

  constructor(private cannonService: CannonService) { }

  ngOnInit(): void {
    this.getAll();
    this.create({damage: 5, ranking: 1, range: 2, modifiers: []});
  }

  getAll() {
    this.cannonService.getAll().subscribe((arg: any) => {
      console.log(arg);
     });
  }

  getById(id: number) {
    this.cannonService.getById(id).subscribe((arg: any) => {
      console.log(arg);
     });
  }

  create(data: any) {
    this.cannonService.create(data).subscribe((arg: any) => {
      console.log(arg);
     });
  }

  update(data: any) {
    this.cannonService.update(data).subscribe((arg: any) => {
      console.log(arg);
     });
  }

  delete(id: number) {
    this.cannonService.delete(id).subscribe((arg: any) => {
      console.log(arg);
     });
  }
}
