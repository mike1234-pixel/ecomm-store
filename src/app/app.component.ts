import { Component, OnDestroy } from '@angular/core';
import { NgRedux, select } from "ng2-redux" 
import { IAppState  } from './store';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { INCREMENT } from "./actions"



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'ecomm-store';
  products: Observable<any[]>
  subscription;
  // select decorator allows you to subscribe to selected slices of the state, must use async pipe in template
  @select() counter: any

  constructor(private ngRedux: NgRedux<IAppState>, firestore: AngularFirestore) {
    this.products = firestore.collection('products').valueChanges() // returns Observable
    this.subscription = this.products.subscribe(res=>console.log(res)) // subscribe for real-time db updates and return json
    console.log(this.subscription)
  } 

  increment() {
    // pass action object to dispatch - actions can also have a payload of data, e.g. subject body etc if dealing with form data
    this.ngRedux.dispatch({ type: INCREMENT })
  }

  // when navigating away from a component that is subscribe to a db, 
  // you need to unsubscribe to prevent memory leaks
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
