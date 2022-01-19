import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-field-control-msg',
  templateUrl: './app-field-control-msg.component.html',
  styleUrls: ['./app-field-control-msg.component.css']
})
export class AppFieldControlMsgComponent implements OnInit {

  @Input() error: any
  @Input() touched: any
  @Input() successText: string = 'Good job :)'
  @Input() errorText: string = 'Oh no :('

  constructor() { }

  ngOnInit(): void {
  }

  public getStyle() { 
    let error = { 'success': false, 'error': true }
    let ok = { 'success': true, 'error': false }

    if (this.error == 'true') { return error } 
    else { return ok }
  }

  public getText() {
    return (this.error == 'true') ? this.errorText : this.successText
  }

  public isVisible() { 
    return (this.touched == 'false') ? true : false
  }

}
