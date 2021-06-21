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
  subNavHidden: boolean = true
  iconSize: string = '50px'

  constructor(private ngRedux: NgRedux<IAppState>) {  }

  toggleSubNav() {
    this.subNavHidden ? this.subNavHidden = false : null // val only needs reassigning once
    this.ngRedux.dispatch({ type: TOGGLE_SUB_NAV })
  }

}
