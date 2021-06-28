import { Component, OnDestroy } from '@angular/core';
import { NgRedux, select } from "ng2-redux" 
import { IAppState  } from './redux/store';
import { AngularFirestore } from '@angular/fire/firestore';
import { SAVE_PAINTING_PRODUCTS } from "./redux/actions"
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'arts-store';
  productsPainting: any
  productsPaintingSubscription: any

  constructor(private userService: UserService, private auth: AuthService, private ngRedux: NgRedux<IAppState>, private firestore: AngularFirestore) {
    console.log(this.auth.user)
    
    if (this.auth.user) {
        console.log('running')
        this.userService.save(this.auth.user)
      }
  } 

  ngOnInit() {
    this.productsPainting = this.firestore.collection('products-painting').valueChanges() // returns Observable
    this.productsPaintingSubscription = this.productsPainting.subscribe((res: any)=>{
      // save firestore data to redux
      this.ngRedux.dispatch({ type: SAVE_PAINTING_PRODUCTS , payload: res})
    })     
  }

  ngOnDestroy() {
    this.productsPaintingSubscription.unsubscribe()
  }
}
