import { Component } from '@angular/core';
import { NgRedux, select } from "ng2-redux";
import { IAppState } from '../store';
import { TOGGLE_SUB_NAV } from '../actions';

@Component({
  selector: 'main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent {

  @select() subNavVisible: any
  subNavRemove = true
  // pink = 'rgba(127, 0, 255, 0.5)'

  constructor(private ngRedux: NgRedux<IAppState>) {  }

  toggleSubNav() {
    this.subNavRemove ? this.subNavRemove = false : null // val only needs reassigning once
    this.ngRedux.dispatch({ type: TOGGLE_SUB_NAV })
  }

}
