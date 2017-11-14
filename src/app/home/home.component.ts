import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  template: `
    <md-toolbar color="primary">
      <span>{{ message }}</span>
    </md-toolbar>
    
  `
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello';
  }
}