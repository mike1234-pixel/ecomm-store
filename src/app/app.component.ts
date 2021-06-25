import { Component, OnDestroy } from '@angular/core';
import { NgRedux, select } from "ng2-redux" 
import { IAppState  } from './store';
import { AngularFirestore } from '@angular/fire/firestore';
import { SAVE_PAINTING_PRODUCTS } from "./actions"



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'ecomm-store';
  productsPainting: any
  productsPaintingSubscription: any
  // select decorator allows you to subscribe to selected slices of the state, must use async pipe in template
  @select() counter: any

  constructor(private ngRedux: NgRedux<IAppState>, private firestore: AngularFirestore) {
  } 

  ngOnInit() {
    this.productsPainting = this.firestore.collection('products-painting').valueChanges() // returns Observable
    this.productsPaintingSubscription = this.productsPainting.subscribe((res: any)=>{
      this.ngRedux.dispatch({ type: SAVE_PAINTING_PRODUCTS , payload: res})
    }) // subscribe for real-time db updates and return json
    console.log(this.productsPaintingSubscription)
    
  }

  // when navigating away from a component that is subscribe to a db, 
  // you need to unsubscribe to prevent memory leaks
  ngOnDestroy() {
    this.productsPaintingSubscription.unsubscribe()
  }
}
