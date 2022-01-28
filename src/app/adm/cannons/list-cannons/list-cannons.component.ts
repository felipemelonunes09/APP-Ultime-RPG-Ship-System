import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CannonService } from '../cannons.service';

@Component({
  selector: 'app-list-cannons',
  templateUrl: './list-cannons.component.html',
  styleUrls: ['./list-cannons.component.css']
})
export class ListCannonsComponent implements OnInit {

  cannons: any = [];
  constructor(private router: Router, private cannonService: CannonService) { }

  ngOnInit(): void {
    this.getAll();
  }

  create(value: any): void {
    console.log('testing')
    this.router.navigate(['/adm', 'parts', 'create'])
  }

  isPartsEmpty() : Boolean {
    return this.cannons.length == 0;
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

  delete(id: string) {
    this.cannonService.delete(id).subscribe((cannons: any) => {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
     });
  }
}
