import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-list-blankslate',
  templateUrl: './empty-list-blankslate.component.html',
  styleUrls: ['./empty-list-blankslate.component.css']
})
export class EmptyListBlankslateComponent implements OnInit {

  constructor() { }

  @Input() title: string | undefined;
  @Input() description: string | undefined;

  ngOnInit(): void {
  }

}
 