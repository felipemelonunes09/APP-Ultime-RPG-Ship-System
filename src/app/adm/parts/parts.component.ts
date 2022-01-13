import { Component, OnInit } from '@angular/core';
import { PartsService } from './parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

  public parts: any = [];

  constructor(private partsService: PartsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  isPartsEmpty() : Boolean {
    return this.parts.length == 0;
  }

  getAll() {
    this.partsService.getAll().subscribe((parts: any) => {
      this.parts = parts.objects;
     });
  }

  getById(id: number) {
    this.partsService.getById(id).subscribe((parts: any) => {
      console.log(parts);
     });
  }

  create(data: any) {
    this.partsService.create(data).subscribe((parts: any) => {
      console.log(parts);
     });
  }

  update(data: any) {
    this.partsService.update(data).subscribe((parts: any) => {
      console.log(parts);
     });
  }

  delete(id: number) {
    this.partsService.delete(id).subscribe((parts: any) => {
      console.log(parts);
     });
  }
}
