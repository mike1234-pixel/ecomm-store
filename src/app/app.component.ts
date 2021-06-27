import { Component, OnDestroy } from '@angular/core';
import { NgRedux, select } from "ng2-redux" 
import { IAppState  } from './redux/store';
import { AngularFirestore } from '@angular/fire/firestore';
import { SAVE_PAINTING_PRODUCTS } from "./redux/actions"



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'ecomm-store';
  productsPainting: any
  productsPaintingSubscription: any

  constructor(private ngRedux: NgRedux<IAppState>, private firestore: AngularFirestore) {
  } 

  ngOnInit() {
    this.productsPainting = this.firestore.collection('products-painting').valueChanges() // returns Observable
    this.productsPaintingSubscription = this.productsPainting.subscribe((res: any)=>{
      // save firestore data to redux
      this.ngRedux.dispatch({ type: SAVE_PAINTING_PRODUCTS , payload: res})
      console.log(res)
    })     
  }

  ngOnDestroy() {
    this.productsPaintingSubscription.unsubscribe()
  }
}
