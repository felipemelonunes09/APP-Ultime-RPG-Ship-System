import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Part } from 'src/app/shared/models/parts.model';
import Swal from 'sweetalert2';
import { PartsService } from '../parts.service';

@Component({
  selector: 'app-list-parts',
  templateUrl: './list-parts.component.html',
  styleUrls: ['./list-parts.component.css']
})
export class ListPartsComponent implements OnInit {
  
  public parts: any = [];

  constructor( 
    private router: Router, 
    private partsService: PartsService
    ) { }

  ngOnInit(): void {
    this.partsService.getAll().subscribe(data => { this.parts = data; })
  }

  isPartsEmpty() : Boolean {
    return this.parts.objects.length == 0 
  }

  create(value: any): void {
      this.router.navigate(['/adm', 'parts', 'create'])
  }

  delete(data: any) {
    
    const id = data._id
    this.partsService.delete(id).subscribe(res => { 
      Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
     })
  }

  confirm(data: any) { 
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this! ID: " + data._id,
      icon: 'warning',
      background: '#0d1117',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(data)
      }
    })
  }
}
