import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Part } from 'src/app/shared/models/parts.model';
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


}
