import { Component } from '@angular/core';
import { NgRedux, select } from "ng2-redux" 
import { AsyncPipe } from '@angular/common'
import { IAppState  } from './store';
import { INCREMENT } from "./actions"
import { Observable } from 'rxjs';


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
    // pass action object to dispatch - actions can have additional fields, e.g. subject body etc if dealing with form data
    this.ngRedux.dispatch({ type: INCREMENT })
  }
}
