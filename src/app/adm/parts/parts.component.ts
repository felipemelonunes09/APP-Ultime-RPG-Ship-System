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
  }
}
