import { Component } from '@angular/core';
import { NgRedux, select } from "ng2-redux" 
import { IAppState  } from './store';
import { INCREMENT } from "./actions"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomm-store';
  // select decorator allows you to subscribe to selected slices of the state, must use async pipe in template
  @select() counter: any

  constructor(private ngRedux: NgRedux<IAppState>) {
    
  } 

  increment() {
    // pass action object to dispatch - actions can also have a payload of data, e.g. subject body etc if dealing with form data
    this.ngRedux.dispatch({ type: INCREMENT })
  }
}
