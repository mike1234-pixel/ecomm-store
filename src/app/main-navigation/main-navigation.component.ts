import { Component } from '@angular/core';
import { NgRedux, select } from "ng2-redux";
import { IAppState } from '../store';
import { TOGGLE_SUB_NAV, TOGGLE_DROPDOWN } from '../actions';
import { OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnDestroy {

  @select() subNavVisible: any
  @select() dropdownVisible: any
  subNavHidden: boolean = true
  dropdownHidden: boolean = true
  iconSize: string = '50px'

  constructor(private ngRedux: NgRedux<IAppState>, public auth: AuthService) {
    
    }

  ngOnDestroy() {
    this.auth.mySubscription.unsubscribe()
  }

  toggleSubNav() {
    this.subNavHidden ? this.subNavHidden = false : null // val only needs reassigning once
    this.ngRedux.dispatch({ type: TOGGLE_SUB_NAV })
  }

  toggleDropdown() {
    this.dropdownHidden ? this.dropdownHidden = false : null // val only needs reassigning once
    this.ngRedux.dispatch({ type: TOGGLE_DROPDOWN })
  }

  logout() {
    this.auth.logout()
  }

}
