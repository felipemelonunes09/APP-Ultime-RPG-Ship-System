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
  }

}
