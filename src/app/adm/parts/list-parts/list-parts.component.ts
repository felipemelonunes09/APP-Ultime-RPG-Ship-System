import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-parts',
  templateUrl: './list-parts.component.html',
  styleUrls: ['./list-parts.component.css']
})
export class ListPartsComponent implements OnInit {
  
  parts: any = [1];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  
  isPartsEmpty() : Boolean {
    return this.parts.length == 0
  }

  create(value: any): void {
      console.log('testing')
      this.router.navigate(['/adm', 'parts', 'create'])
  }


}
