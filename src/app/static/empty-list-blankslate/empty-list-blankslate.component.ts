import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-list-blankslate',
  templateUrl: './empty-list-blankslate.component.html',
  styleUrls: ['./empty-list-blankslate.component.css']
})
export class EmptyListBlankslateComponent implements OnInit {

  constructor() { }

  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() link: string | undefined;
  @Input() button: string | undefined;

  @Output() buttonClicked = new EventEmitter()
  @Output() linkClicked = new EventEmitter()

  ngOnInit(): void {
  }

  public buttonEvent(): void {
    this.buttonClicked.emit('event')
  }

  public linkEvent(): void {
    this.linkClicked.emit('event')
  }

}
 